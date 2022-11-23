const { json } = require("express");

const payload =
{
    "author": "Brandon Sanderson",
    "comments": [],
    "cover": "https://i.imgur.com/kBAPdwo.jpg",
    "creationDate": "2018-08-24T13:05:21.043Z",
    "currentRating": 0,
    "description": "In Oathbringer, the third volume of the New York Times bestselling Stormlight Archive",
    "genre": "Fantasy",
    "isbn": "9780765326379",
    "pagesCount": 1220,
    "price": 20.18,
    "purchasesCount": 20,
    "ratedBy": [],
    "ratedCount": 0,
    "ratingPoints": 0,
    "title": "Oathbringer (The Stormlight Archive #3)",
    "year": 2017
}

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzRlYzQ1NGQ2ZWJhMzcxNWFjYWQxNDIiLCJ1c2VybmFtZSI6ImFkbWluIiwiYXZhdGFyIjoiaHR0cHM6Ly9pLmltZ3VyLmNvbS80czVxTHpVLnBuZyIsImlzQ29tbWVudHNCbG9ja2VkIjp0cnVlLCJpc0FkbWluIjp0cnVlLCJyb2xlcyI6WyI2MzRlYzQ1NGQ2ZWJhMzcxNWFjYWQxM2EiXX0sImlhdCI6MTY2ODc4MTI2NywiZXhwIjoyMjczNTgxMjY3fQ.2dGrxu5zBpSMsSaewYe-Xz7qFaQ_aCAyDnOk4DArw04";
const res = {
    status(res) {
        return {
            json() {
                return res;
            }
        }
    }
}


module.exports = { payload, res ,token }