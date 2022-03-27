import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MyTweetsContext = createContext();

export const MyTweetsProvider = (props) => {
  const [myTweets, setMyTweets] = useState([]);

  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    try {
      const tweets = await axios.get("http://localhost:3001/api/tweets");
      setMyTweets(tweets.data.tweets);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyTweetsContext.Provider value={[myTweets, setMyTweets, fetchTweets]}>
      {props.children}
    </MyTweetsContext.Provider>
  );
};
