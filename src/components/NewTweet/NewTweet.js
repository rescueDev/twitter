import React, { useState, useContext } from "react";
import { MyTweetsContext } from "../../context/TweetContex";
import styles from "./NewTweet.module.css";
import axios from "axios";
import Cookies from "js-cookie";

export default function NewTweet() {
  const [tweetText, setTweetText] = useState("");

  const [userCookie, setUserCoookie] = useState(
    JSON.parse(Cookies.get("user"))
  );

  const [myTweets, setMyTweets, fetchTweets] = useContext(MyTweetsContext);

  const updateText = (e) => {
    setTweetText(e.target.value);
  };

  const addTweet = async () => {
    try {
      const tweet = await axios.post("http://localhost:3001/api/tweet", {
        title: "tweet",
        text: tweetText,
        comments: 0,
        retweets: 0,
        likes: 0,
        user_id: userCookie.id,
      });
      console.log(userCookie.id);
      fetchTweets();
    } catch (err) {
      console.log(err);
    }
    setTweetText("");
  };

  return (
    <div className={styles.newTweet}>
      <textarea
        className={styles.textareaTweet}
        cols="52"
        rows="4"
        placeholder="What's up?"
        onChange={updateText}
        value={tweetText}
      ></textarea>
      <div className={styles.options}>
        <button onClick={() => addTweet()} className="btn btn-primary">
          Tweet
        </button>
      </div>
    </div>
  );
}
