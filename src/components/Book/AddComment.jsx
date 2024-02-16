import { useEffect } from "react";
import { useState } from "react";
import FormExample from '../FormExample.jsx'

export const AddComment = ({asin}) => {

  useEffect(() => {
    try {
      const fetchAsin = async () => {
        await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
          method: "POST",
          body: JSON.stringify(),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmMWUzOTA0NTcyZjAwMTk0OTM4ZTMiLCJpYXQiOjE3MDgwNzI1MDUsImV4cCI6MTcwOTI4MjEwNX0.6-KKXlP5uRZLL4LUkJTAdLQh5w9FONCY7pWnU5sT8G0",
          },
        });
      };
      // fetchAsin();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <FormExample asin={asin}/>
  )

};
