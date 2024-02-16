import { useEffect, useState } from "react";
import { SingleComment } from "./SingleComment.jsx";

export const CommentList = ({ asin }) => {

  const [data, setData] = useState()

  useEffect(() => {
    try {
      const fetchAsin = async () => {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmMWUzOTA0NTcyZjAwMTk0OTM4ZTMiLCJpYXQiOjE3MDgwNzI1MDUsImV4cCI6MTcwOTI4MjEwNX0.6-KKXlP5uRZLL4LUkJTAdLQh5w9FONCY7pWnU5sT8G0",
            },
          }
        );
        const data = await response.json();
        setData(data)
      };
      fetchAsin();
    } catch (error) {
      console.log(error);
    }
  }, [asin])


  return (
    <div>
      {data && data.map((comment) => {
        return (
         <SingleComment key={comment._id} comment={comment.comment} rate={comment.rate} author={comment.author}/>
        )
      })}
    </div>
  );
 
};
