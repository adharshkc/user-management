import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./userProfile";

import useGetFetch from "../../utils/useGetFetch";

const Body = () => {
  const navigate = useNavigate();
  const {fetchData} = useGetFetch()


  const fetchGetData = async function () {
   try {
     const response = await fetchData("/user/home");
     if(!response){
       navigate("/login")
     }
   } catch (error) {
      navigate("/login")
   }
  };

  useEffect(() => {
    fetchGetData();
  }, []);
  return (
    <div className="flex justify-center">
      <ProfileCard />
    </div>
  );
};

export default Body;
