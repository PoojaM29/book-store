
const CART_CONTROLLER = require('../controllers/cart');

let res= require('./mock');

const express = require('express');
const request = require('supertest');
const app = express();
const expect = require("chai").expect;

describe("GET cart data", function () {
    it("returns cart by id", async function () {
      const req = { user :{
        id:"123"
      }}
      const result = CART_CONTROLLER.getCart(req,res);
      //expect(result.status).to.eql(200);
     
    });
  
    it("returns cart size", async function () {
        const req = { user :{
          id:"123"
        }}
        const result = CART_CONTROLLER.getCartSize(req,res);
        //expect(result.status).to.eql(200);
       
      });
    
      it("returns remove from cart", async function () {
        const req = { user :{
            id:"123"
          }, params:{
              bookId:"5b8002915b8f1b10d4b666dd"
          }}
        const result = CART_CONTROLLER.removeFromCart(req,res);
        //expect(result.status).to.eql(200);
       
      });
    
      it("returns checkout from cart ", async function () {
        const req = { user :{
          id:"123"
        }}
        const result = CART_CONTROLLER.checkout(req,res);
        //expect(result.status).to.eql(200);
       
      });

      it("returns checkout from cart ", async function () {
        const req = { user :{
          id:"123"
        }, params:{
            bookId:"5b8002915b8f1b10d4b666dd"
        }}
        const result = CART_CONTROLLER.addToCart(req,res);
        //expect(result.status).to.eql(200);
       
      });

      
   
  });