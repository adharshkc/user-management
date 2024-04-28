import { serverUrl } from "../constants/constant";
import axios from "axios";

const useGetFetch =  function () {


    const fetchData = async function(endPoint){

        try {
          console.log("server",serverUrl + endPoint);
          const storedData = localStorage.getItem("user")
          const data = JSON.parse(storedData)
          // if(data){

            const token = data?.token;
            const response = await axios.get(serverUrl + endPoint, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            return response;
          // }else{
            
          // }
        } catch (error) {
          console.log("log", error)
          throw error;
        }
    }
    return {fetchData}
};

export default useGetFetch;
