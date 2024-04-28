import axios from "axios";
import { serverUrl } from "../constants/constant";

const useDeleteFetch = ()=>{
    const fetchDelete = async function (data, endPoint) {
        try {
          const storedData = localStorage.getItem("user");
          const localData = JSON.parse(storedData);
          const token = localData?.token;
          console.log(serverUrl+endPoint)
          console.log(token)
          const resData = await axios.delete(
            serverUrl + endPoint,
            {
              data,
            
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          return resData
        } catch (err) {
          console.log(err)
          throw err
        }
      };
      return fetchDelete;
}

export default useDeleteFetch;