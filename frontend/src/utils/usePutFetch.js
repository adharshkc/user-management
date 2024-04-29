import axios from "axios";
import { serverUrl } from "../constants/constant";

const usePutFetch = () => {

  const fetchPut = async function (data, endPoint) {
    try {
      console.log(data);
      const storedData = localStorage.getItem("user");
      const localData = JSON.parse(storedData);
      const token = localData?.token;
      console.log(token);
      console.log(serverUrl + endPoint);
      const resData = await axios.put(serverUrl + endPoint, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return resData;
    } catch (err) {
      console.log("error", err);
      throw err;
    }
  };
  return fetchPut;
};

export default usePutFetch;
