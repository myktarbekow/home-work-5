import "./Comment.css";
import CommentDate from "./CommentDate";
import CommentUserInfo from "./CommentUserInfo";
import CommentWrapper from "./CommentWrapper";

function Comment(props) {
  return (
    <div className="Container">
      <CommentWrapper className="comment-first">
        <CommentUserInfo
          avatarUrl={props.data.author.avatarUrl}
          name={props.data.author.name}
        />
      </CommentWrapper>

      <div className="Comment-text">
        {props.data.text}
        <CommentDate date={props.data.date} />
      </div>
    </div>
  );
}
export default Comment;
