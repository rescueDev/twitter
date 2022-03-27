const express = require("express");
const router = express.Router();
const tweetController = require("../controllers/tweet");

router.get("/api/tweet/:tweetID", tweetController.fetchTweet);
router.get("/api/tweets/", tweetController.fetchTweets);
router.post("/api/tweet/", tweetController.createTweet);
router.post("/api/tweet/:tweetID", tweetController.editTweet);
router.delete("/api/tweet/:tweetID", tweetController.deleteTweet);

module.exports = router;
