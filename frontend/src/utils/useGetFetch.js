import { serverUrl } from "../constants/constant";
import axios from "axios";

const useGetFetch =  function () {


    const fetchData = async function(endPoint){

        try {
          console.log(serverUrl + endPoint);
          const storedData = localStorage.getItem("user")
          const data = JSON.parse(storedData)
          console.log(data)
          if(data){

            const token = data.token;
            const response = await axios.get(serverUrl + endPoint, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            return response;
          }else{
            return null
          }
        } catch (error) {
          return error;
        }
    }
    return {fetchData}
};

export default useGetFetch;
