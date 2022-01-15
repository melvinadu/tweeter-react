import React from "react";

function Tweet(props){

  return (
    <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={props.avatar} />
          <h2 className="tweet--name">{props.firstName} {props.lastName}</h2>
          <small className="tweet--handle">{props.handle}</small>
        </header>

        <div className="tweet--body">
          <p>{props.body}</p>
        </div>

        <footer className="tweet--footer">
          <small className="footer--age">{props.age}<small>
              <span className="footer--actions">
                <a href="#"><i className="fa fa-flag"></i></a>
                <a href="#"><i className="fa fa-retweet"></i></a>
                <a href="#"><i className="fa fa-heart"></i></a>'
              </span>
            </small></small></footer>
      </article>
  );
}

export default Tweet;