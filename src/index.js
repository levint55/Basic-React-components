import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 3:00PM"
        srcImage={faker.image.avatar()}
        text="Hi 1"
      />
      <CommentDetail
        author="Alexa"
        timeAgo="Today at 4:00PM"
        srcImage={faker.image.avatar()}
        text="Hi 1"
      />
      <CommentDetail
        author="Siri"
        timeAgo="Today at 5:00PM"
        srcImage={faker.image.avatar()}
        text="Hi 1"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
