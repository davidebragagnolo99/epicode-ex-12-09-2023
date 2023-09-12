import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useEffect, useState } from "react";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/books/" + props.asin + "/comments/", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4Njk1MzY4NWVjNDAwMTQ1MGI4NWQiLCJpYXQiOjE2OTQ1MjYzMjMsImV4cCI6MTY5NTczNTkyM30.L9G9TFcEzOL3yQU2nn1l29O96wRji01o4awSMw62270",
          },
        });
        if (response.ok) {
          const comments = await response.json();
          setComments(comments);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchData();
  }, [props.asin]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} fetchData={fetchData} />
      <CommentList commentsToShow={comments} fetchData={fetchData} />
    </div>
  );
};

export default CommentArea;
