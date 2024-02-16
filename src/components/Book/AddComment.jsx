export const AddComment = ({ givenComment }) => {
  const commentPostFunction = () => {
    try {
      const fetchAsin = async () => {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/`,
          {
            method: "POST",
            body: JSON.stringify(givenComment),
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmMWUzOTA0NTcyZjAwMTk0OTM4ZTMiLCJpYXQiOjE3MDgwNzI1MDUsImV4cCI6MTcwOTI4MjEwNX0.6-KKXlP5uRZLL4LUkJTAdLQh5w9FONCY7pWnU5sT8G0",
            },
          }
        );
        const data = await response.json();
        console.log(data);
      };
      fetchAsin();
    } catch (error) {
      console.log(error);
    }
  };

  commentPostFunction();
};
