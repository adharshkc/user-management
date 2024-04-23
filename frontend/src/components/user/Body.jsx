import { useEffect } from "react";
// import WeatherCard from "./WeatherCard";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./userProfile";

import useGetFetch from "../../utils/useGetFetch";

const Body = () => {
  const navigate = useNavigate();
  const {fetchData} = useGetFetch()


  const fetchGetData = async function () {
    const response = await fetchData("/home");
    console.log("hello",response);
    if(response.status !== 200){
      navigate("/")
    }
  };

  useEffect(() => {
    fetchGetData();
  }, []);
  return (
    <div className="flex justify-center">
      <ProfileCard />
      {/* <WeatherCard /> */}
    </div>
  );
};

export default Body;
