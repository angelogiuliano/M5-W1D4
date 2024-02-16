import { SingleComment } from "./SingleComment";

export const CommentList = ({ asin }) => {
  try {
    const fetchAsin = async () => {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/:${asin}/comments/`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmMWUzOTA0NTcyZjAwMTk0OTM4ZTMiLCJpYXQiOjE3MDgwNzI1MDUsImV4cCI6MTcwOTI4MjEwNX0.6-KKXlP5uRZLL4LUkJTAdLQh5w9FONCY7pWnU5sT8G0",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      return (
        <div>
          <SingleComment />
        </div>
      );
    };
    fetchAsin();
  } catch (error) {
    console.log(error);
  }
};
