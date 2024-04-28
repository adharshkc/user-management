import axios from "axios";
import { serverUrl } from "../constants/constant";
// import { useEffect, useState } from "react";

const usePostFetch = () => {
  // const [response, setResponse] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  const fetchPost = async function (data, endPoint) {
    try {
      console.log(data)
      const storedData = localStorage.getItem("user");
      const localData = JSON.parse(storedData);
      const token = localData?.token;
      console.log(token);
      console.log(serverUrl + endPoint);
      const resData = await axios.post(serverUrl + endPoint, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return resData;
    } catch (err) {
      console.log("error",err);
      throw err;
    }
  };
  return fetchPost;
  // return { response, error, fetchPost };
};

export default usePostFetch;
