import TweetsList from "../../components/TweetsList/TweetsList";
import NewTweet from "../../components/NewTweet/NewTweet";

function Home() {
  return (
    <div className="homepage">
      <h1>Home page</h1>
      <NewTweet></NewTweet>
      <TweetsList></TweetsList>
    </div>
  );
}

export default Home;
