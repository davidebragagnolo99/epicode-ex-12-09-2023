import { Button, ListGroup } from "react-bootstrap";

const SingleComment = (props) => {
  const deleteComment = async (props) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4Njk1MzY4NWVjNDAwMTQ1MGI4NWQiLCJpYXQiOjE2OTQ1MjYzMjMsImV4cCI6MTY5NTczNTkyM30.L9G9TFcEzOL3yQU2nn1l29O96wRji01o4awSMw62270",
        },
      });
      if (response.ok) {
        alert("Comment was deleted successfully!");
      } else {
        alert("Error - comment was NOT deleted!");
      }
    } catch (error) {
      alert("Error - comment was NOT deleted!");
    }
    props.fetchData();
  };

  return (
    <ListGroup.Item>
      {props.comment}
      <Button variant="danger" className="ml-2" onClick={() => deleteComment(props.comment._id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
