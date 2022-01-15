import React from 'react';
import Tweet from './Tweet';

function TweetList(){
  const tweetData = {
    firstTweet: {
      avatar: "https://i.imgur.com/73hZDYK.png",
      firstName: "Issac",
      lastName: "Newton",
      handle: "@SirIsaac",
      body: "If I have seen further it is by standing on the shoulders of giants",
      age: "10 days ago"
    },
  
    secondTweet: {
      avatar: "https://i.imgur.com/nlhLi3I.png",
      firstName: "Descartes",
      lastName: "Descartes",
      handle: "@rd",
      body: "Je pense , donc je suis",
      age: "10 days ago"
    }
  }
  

  return (
    <section className="tweets">
      <Tweet {...tweetData.firstTweet}/>
      <Tweet {...tweetData.secondTweet}/>
    </section>
  );
}

export default TweetList;