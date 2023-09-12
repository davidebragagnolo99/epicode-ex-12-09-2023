import { useState } from "react";
import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  const changeSelectedBookHandler = () => {
    props.changeSelectedBook(props.book.asin);
  };

  return (
    <>
      <Card
        onClick={changeSelectedBookHandler}
        style={{
          border: props.selectedBook === props.book.asin ? "3px solid red" : "3px solid #ebebeb",
        }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
