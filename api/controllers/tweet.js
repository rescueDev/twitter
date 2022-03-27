const Tweet = require("../models/tweet");
const User = require("../models/user");

exports.fetchTweets = async (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const tweets = await Tweet.findAll({
      include: [
        {
          model: User,
          required: true,
        },
      ],
    });
    //response with tweets json
    res.send(JSON.stringify({ tweets }));
  } catch (error) {
    res.send(JSON.stringify({ error: error }));
  }
};

exports.fetchTweet = async (req, res, next) => {
  res.setHeader("Content-Type", "application/json");

  const tweet_id = req.params.tweetID;
  try {
    const tweet = await Tweet.findOne({ id: tweet_id });
    res.send(JSON.stringify({ tweet }));
  } catch (error) {
    res.send(JSON.stringify({ error: error }));
  }
};

exports.createTweet = async (req, res, next) => {
  //Set header JSON
  res.setHeader("Content-Type", "application/json");
  // res.json({ requestBody: req.body });

  const title = req.body.title;
  const text = req.body.text;
  const likes = req.body.likes;
  const retweets = req.body.retweets;
  const comments = req.body.comments;
  const user_id = req.body.user_id;
  const tweet = { title, text, likes, retweets, comments, user_id };

  try {
    const response = await Tweet.create(tweet);
    res.send(JSON.stringify({ response }));
  } catch (error) {
    res.send(JSON.stringify({ error: error }));
  }
};

exports.editTweet = async (req, res, next) => {
  //Set header JSON
  res.setHeader("Content-Type", "application/json");

  const title = req.body.title;
  const text = req.body.text;
  const likes = req.body.likes;
  const retweets = req.body.retweets;
  const comments = req.body.comments;
  const values = { title, text, likes, retweets, comments };

  try {
    const tweet = await Tweet.findByPk(tweet_id);
    const updated_tweet = await tweet.update(values);
    res.send(JSON.stringify({ updated_tweet }));
  } catch (error) {
    res.send(JSON.stringify({ error: error }));
  }
};

exports.deleteTweet = async (req, res, next) => {
  //Set header JSON
  res.setHeader("Content-Type", "application/json");

  const tweet_id = req.params.tweetID;

  try {
    const tweet = await Tweet.findByPk(tweet_id);
    await tweet.destroy();
    res.send("Tweet " + tweet_id + " eliminato con successo");
  } catch (error) {
    res.send(JSON.stringify({ error: error }));
  }
};
