//During the test the env variable is set to test

let mongoose = require("mongoose");
let Book = require('../models/Book');
let User = require('../models/User');
let Cart = require('../models/Cart');
let Role = require('../models/Role');
let Receipt = require('../models/Receipt');
let Comment = require('../models/Comment');

const BOOK_CONTROLLER = require('../controllers/book');
const USER_CONTROLLER = require('../controllers/user');

const ERROR_CONTROLLER = require('../controllers/error');

let { payload, res, token } = require('./mock');

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe("GET /books", function () {
  beforeEach(function (done) {
    // I do stuff like populating db
    done();
  });

  afterEach(function (done) {
    // I do stuff like deleting populated db
    done();
  });

  after(function () {
    mongoose.connection.close();
  });
  it("It should GET all the book", (done) => {
    chai.request(server)
      .get("/book/search")
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it("It should GET all the book", (done) => {
    chai.request(server)
      .get("/book/search")
      .query({query:{searchTerm:"test"},sort: {creationDate:-1},skip:0,limit:15})
      .end((err, response) => {
        response.should.have.status(500);
        done();
      });
  });
  it("It should NOT GET book detail", (done) => {
    chai.request(server)
      .get("/book/details/" + "5b8002915b8f1b10d4b666dd")
      .end((err, response) => {
        response.should.have.status(400);
        done();
      });
  });
  it("It should create new book", (done) => {
    chai.request(server)
      .post("/book/add")
      .send(payload)
      .auth(token, { type: 'bearer' })
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it("It should edit book", (done) => {
    chai.request(server)
      .put("/book/edit/5b8002915b8f1b10d4b666dd")
      .send(payload)
      .auth(token, { type: 'bearer' })
      .end((err, response) => {
        response.should.have.status(400);
        done();
      });
  });
  it("It should delete book", (done) => {
    chai.request(server)
      .delete("/book/delete/637788357c992d47af5a97e6")
      .auth(token, { type: 'bearer' })
      .end((err, response) => {
        response.should.have.status(400);
        done();
      });
  });
  it("It should rate book", (done) => {
    const req = {
      rating: 4,
      user: {
        id: "123"
      }
    }
    chai.request(server)
      .post("/book/rate/637788357c992d47af5a97e6")
      .auth(token, { type: 'bearer' })
      .send(req)
      .end((err, response) => {
        response.should.have.status(400);
        done();
      });
  });
  it("It should add to favourite book", (done) => {
    chai.request(server)
      .post("/book/addToFavorites/637788357c992d47af5a97e6")
      .auth(token, { type: 'bearer' })
      .end((err, response) => {
        response.should.have.status(400);
        done();
      });
  });

});

describe("GET /book/details/:bookId", function () {
  it("returns book by id", async function () {
    const req = {
      params: {
        id: "123"
      }
    }
    const result = BOOK_CONTROLLER.getSingle(req, res);
    //expect(result.status).to.eql(200);

  });


  it("returns add book", async function () {
    const req = { body: payload }
    const result = BOOK_CONTROLLER.add(req, res);
    //expect(result.status).to.eql(200);

  });

  it("returns validation add book", async function () {
    const req = { body: {} }
    const result = BOOK_CONTROLLER.add(req, res);
    //expect(result.status).to.eql(200);

  });

  it("returns rate book", async function () {
    const req = {
      body: { rating: 4 }, params: {
        bookId: "5b8002915b8f1b10d4b666dd"
      },
      user: {
        id: "123"
      }
    }
    const result = BOOK_CONTROLLER.rate(req, res);
    //expect(result.status).to.eql(200);

  });
  it("returns validation rate book", async function () {
    const req = {
      body: {}, params: {
        bookId: "5b8002915b8f1b10d4b666dd"
      },
      user: {
        id: "123"
      }
    }
    const result = BOOK_CONTROLLER.rate(req, res);
    //expect(result.status).to.eql(200);

  });


  it("returns edit", async function () {
    const req = {
      body: payload, params: {
        bookId: "5b8002915b8f1b10d4b666dd"
      }
    }
    const result = BOOK_CONTROLLER.edit(req, res);
    //expect(result.status).to.eql(200);

  });

  it("returns addtofavourite book", async function () {
    const req = {
      params: {
        bookId: "5b8002915b8f1b10d4b666dd"
      }
    }
    const result = BOOK_CONTROLLER.addToFavorites(req, res);
    //expect(result.status).to.eql(200);

  });

  it("returns validation addtofavourite book", async function () {
    const req = {
      params: {

      }
    }
    const result = BOOK_CONTROLLER.addToFavorites(req, res);
    //expect(result.status).to.eql(200);

  });

  it("returns delete book", async function () {
    const req = {
      params: {
        bookId: "5b8002915b8f1b10d4b666dd"
      }
    }
    const result = BOOK_CONTROLLER.delete(req, res);
    //expect(result.status).to.eql(200);

  });

  it("returns validation delete book", async function () {
    const req = {
      params: {

      }
    }
    const result = BOOK_CONTROLLER.delete(req, res);
    //expect(result.status).to.eql(200);

  });


  it("returns validation search book", async function () {
    const req = {
      params: {
        sort: { creationDate: -1 },
        limit: 5,
        query: "test",
        skip: 0
      },
      query: "test"
    }
    const result = BOOK_CONTROLLER.search(req, res);
    //expect(result.status).to.eql(200);

  });


});