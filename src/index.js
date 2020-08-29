import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 3:00PM"
          srcImage={faker.image.avatar()}
          text="Hi 1"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alexa"
          timeAgo="Today at 4:00PM"
          srcImage={faker.image.avatar()}
          text="Hi 1"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Siri"
          timeAgo="Today at 5:00PM"
          srcImage={faker.image.avatar()}
          text="Hi 1"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
