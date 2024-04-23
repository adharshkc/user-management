import axios from "axios";
import { serverUrl } from "../constants/constant";
import { useState } from "react";

const usePostFetch = () => {
    const [response, setResponse] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

  const fetchPost = async function (data, endPoint) {
      try {
        setIsLoading(true)
    const storedData = localStorage.getItem("user");
    const localData = JSON.parse(storedData);
    const token = localData?.token;
        
        const resData = await axios.post(serverUrl+endPoint, {
         data
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        // Handle the response data
        setIsLoading(false)
        setResponse(resData)
      } catch (error) {
        // Handle the error
        console.error(error);
        setError(error)
      }
  };

  return {response, isLoading, error}
};


export default usePostFetch;