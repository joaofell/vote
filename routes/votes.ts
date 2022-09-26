const routerVote = require('express').Router();
const voteController = require('../controller/VoteController');

routerVote.get("/votes", voteController.index);
routerVote.post("/vote", voteController.create);

module.exports = routerVote;