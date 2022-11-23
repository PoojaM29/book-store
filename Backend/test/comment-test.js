
const COMMENT_CONTROLLER = require('../controllers/comment');

let res = require('./mock');

const express = require('express');
const request = require('supertest');
const app = express();
const expect = require("chai").expect;

describe("GET Comments data", function () {
    it("returns getComments", async function () {
        const req = {
            params: {
                bookId: "5b8002915b8f1b10d4b666dd",
                skipCount: 2
            }
        }
        const result = COMMENT_CONTROLLER.getComments(req, res);
        //expect(result.status).to.eql(200);

    });

    it("returns getLatestFiveByUser", async function () {
        const req = {
            params: {
                user: {
                    id: "123"
                }
            }
        }
        const result = COMMENT_CONTROLLER.getLatestFiveByUser(req, res);
        //expect(result.status).to.eql(200);

    });

    it("returns add comments", async function () {
        const req = {
            user: {
                id: "123"
            }, params: {
                bookId: "5b8002915b8f1b10d4b666dd"
            },
            body: {
                content: "test"
            }
        }
        const result = COMMENT_CONTROLLER.add(req, res);
        //expect(result.status).to.eql(200);

    });

    it("returns validation add comments", async function () {
        const req = {
            user: {
                id: "123"
            }, params: {
                bookId: "5b8002915b8f1b10d4b666dd"
            },
            body: {
                
            }
        }

        const res = {
            status(res) {
                return {
                    json() {
                        return res;
                    }
                }
            }
        }
        const result = COMMENT_CONTROLLER.add(req, res);
        //expect(result.status).to.eql(200);

    });

    it("returns delete comment ", async function () {
        const req = {
            user: {
                id: "123"
            },
            params: {
                commentId: {
                    id: "123"
                }
            }
        }
        const result = COMMENT_CONTROLLER.delete(req, res);
        //expect(result.status).to.eql(200);

    });

    it("returns edit comment ", async function () {
        const req = {
            user:{
                id: "5b8002915b8f1b10d4b666dd"
            },
            params: {
                commentId: {
                    id: "123"
                }
            }, body: {
                content: "test"
            }
        }
        const result = COMMENT_CONTROLLER.edit(req, res);
        //expect(result.status).to.eql(200);

    });

    it("returns validation edit comment ", async function () {
        const req = {
            user:{
                id: "5b8002915b8f1b10d4b666dd"
            },
            params: {
                commentId: {
                    id: "123"
                }
            }, body: {
               
            }
        }
        const res = {
            status(res) {
                return {
                    json() {
                        return res;
                    }
                }
            }
        }
        const result = COMMENT_CONTROLLER.edit(req, res);
        //expect(result.status).to.eql(200);

    });



});