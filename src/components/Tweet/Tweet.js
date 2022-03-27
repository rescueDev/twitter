import React from "react";
import styles from "./Tweet.module.css";

export default function Tweet({
  text,
  likes,
  username,
  comments,
  retweets,
  avatar,
}) {
  return (
    <div className={styles.tweet}>
      <div className={styles.header}>
        <img className={styles.avatar} src={avatar} alt="" />
        <h5 className={styles.username}>{username}</h5>
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.actions}>
        <span>
          Comment: <span>{comments}</span>{" "}
        </span>
        <span>
          Retweet: <span>{retweets}</span>{" "}
        </span>
        <span>
          Like:<span>{likes}</span>
        </span>
      </div>
    </div>
  );
}
