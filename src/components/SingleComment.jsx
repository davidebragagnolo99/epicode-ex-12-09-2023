import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment, fetchData }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
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
    fetchData.fetchData();
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
