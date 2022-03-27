import React, { useState, useContext, useEffect } from "react";
import { MyTweetsContext } from "../../context/TweetContex";
import Tweet from "../Tweet/Tweet";
import styles from "./TweetsList.module.css";

export default function TweetsList() {
  const [tweets, setTweets, fetchTweets] = useContext(MyTweetsContext);

  return (
    <div>
      <div className={styles.list}>
        {tweets.map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              username={tweet.User.username}
              text={tweet.text}
              comments={tweet.comments}
              retweets={tweet.retweets}
              likes={tweet.likes}
              avatar={tweet.User.avatar}
            ></Tweet>
          );
        })}
      </div>
    </div>
  );
}
