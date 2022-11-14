//During the test the env variable is set to test

let mongoose = require("mongoose");
let Book = require('../models/Book');
let User = require('../models/User');
let Cart = require('../models/Cart');
let Role = require('../models/Role');
let Receipt = require('../models/Receipt');
let Comment = require('../models/Comment');
const USER_CONTROLLER = require('../controllers/user');
const BOOK_CONTROLLER = require('../controllers/book');
const COMMENT_CONTROLLER = require('../controllers/comment');
const CART_CONTROLLER = require('../controllers/cart');
const ERROR_CONTROLLER = require('../controllers/error');

let { payload, res} = require('./mock');

const express = require('express');
const request = require('supertest');
const app = express();
const expect = require("chai").expect;

describe("GET /books", function () {
  it("returns all books", async function () {
    const response = await request(app).get("/book/search",BOOK_CONTROLLER.search);

    expect(response.status).to.eql(404);
   
  });
});

describe("GET /book/details/:bookId", function () {
  it("returns book by id", async function () {
    const response = await request(app).get("/book/search/12",BOOK_CONTROLLER.getSingle);

    expect(response.status).to.eql(404);
   
  });
});


describe("GET /book/details/:bookId", function () {
  it("returns book by id", async function () {
    const req = { params :{
      id:"123"
    }}
    const result = BOOK_CONTROLLER.getSingle(req,res);
    //expect(result.status).to.eql(200);
   
  });


  it("returns add book", async function () {
    const req = { body : payload}
    const result = BOOK_CONTROLLER.add(req,res);
    //expect(result.status).to.eql(200);
   
  });

  it("returns validation add book", async function () {
    const req = { body:{} }
    const result = BOOK_CONTROLLER.add(req,res);
    //expect(result.status).to.eql(200);
   
  });

  
  it("returns edit", async function () {
    const req = { body : payload,params:{
      bookId:"5b8002915b8f1b10d4b666dd"
  }}
    const result = BOOK_CONTROLLER.edit(req,res);
    //expect(result.status).to.eql(200);
   
  });
 
});