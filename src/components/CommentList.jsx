import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (props) => (
  <ListGroup className="mt-2">
    {props.commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
);

export default CommentList;
