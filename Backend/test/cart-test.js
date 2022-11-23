
const CART_CONTROLLER = require('../controllers/cart');

let mongoose = require("mongoose");
let { res, token } = require('./mock');

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe("GET /cart", function () {
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
  it("It should cart size", (done) => {
    chai.request(server)
      .get("/cart/getSize")
      .auth(token, { type: 'bearer' })
      .end((err, response) => {
        response.should.have.status(401);
        done();
      });
  });

  it("It should get user cart", (done) => {
    chai.request(server)
      .get("/user/cart")
      .auth(token, { type: 'bearer' })
      .end((err, response) => {
        response.should.have.status(401);
        done();
      });
  });
  it("It should add user cart", (done) => {
    const req = {
      user: {
        id: "634ec454d6eba3715acad142"
      }
    }
    chai.request(server)
      .post("/user/cart/add/5b8002915b8f1b10d4b666dd")
      .send(req)
      .auth(token, { type: 'bearer' })
      .end((err, response) => {
        response.should.have.status(400);
        done();
      });
  });

  xit("It should  delete cart", (done) => {
    const req = {
      user: {
        id: "634ec454d6eba3715acad142"
      }, params: {
        bookId: "5b8002915b8f1b10d4b666dd"
      }
    }
    chai.request(server)
      .delete("/user/cart/delete/637788357c992d47af5a97e6")
      .auth(token, { type: 'bearer' })
      .send(req)
      .end((err, response) => {
        response.should.have.status(400);
        done();
      });
  });
  xit("It should checkout book", (done) => {
    const req = {
      user: {
        id: "634ec454d6eba3715acad142"
      }
    }
    chai.request(server)
      .post("/user/cart/checkout")
      .auth(token, { type: 'bearer' })
      .send(req)
      .end((err, response) => {
        response.should.have.status(400);
        done();
      });
  });

});
describe("GET cart data", function () {
  it("returns cart by id", async function () {
    const req = {
      user: {
        id: "123"
      }
    }
    const result = CART_CONTROLLER.getCart(req, res);
    //expect(result.status).to.eql(200);

  });

  it("returns cart size", async function () {
    const req = {
      user: {
        id: "123"
      }
    }
    const result = CART_CONTROLLER.getCartSize(req, res);
    //expect(result.status).to.eql(200);

  });

  it("returns remove from cart", async function () {
    const req = {
      user: {
        id: "123"
      }, params: {
        bookId: "5b8002915b8f1b10d4b666dd"
      }
    }
    const result = CART_CONTROLLER.removeFromCart(req, res);
    //expect(result.status).to.eql(200);

  });

  it("returns checkout from cart ", async function () {
    const req = {
      user: {
        id: "123"
      }
    }
    const result = CART_CONTROLLER.checkout(req, res);
    //expect(result.status).to.eql(200);

  });

  it("returns checkout from cart ", async function () {
    const req = {
      user: {
        id: "123"
      }, params: {
        bookId: "5b8002915b8f1b10d4b666dd"
      }
    }
    const result = CART_CONTROLLER.addToCart(req, res);
    //expect(result.status).to.eql(200);

  });



});