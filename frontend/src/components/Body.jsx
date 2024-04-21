import { useEffect } from "react";
// import WeatherCard from "./WeatherCard";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./userProfile";
import axios from "axios";

const Body = () => {
  const navigate = useNavigate();
  // try {
  //   const fetchData = async () => {
  //     const token = localStorage.getItem("token");
  //     const response = await fetch("http://localhost:3000/home", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `${token}`,
  //       },
  //     });
  //     if (!response.ok) {
  //       console.log("eroor");
  //       navigate("/");
  //       throw new Error("failed to fetch data");
  //     }
  //     const data = await response.json();
  //     if (data.error) {
  //       navigate("/");
  //       return;
  //     }
  //   };
  //   fetchData();
  // } catch (error) {
  //   navigate("/");
  // }
  useEffect(() => {
    const fetchData = async () => {
      console.log("render")
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/home", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.log(error);
        // if(error.response || error.response.status === 401){
        navigate("/");
        // }
      }
    };
    fetchData();
  });
  return (
    <div className="flex justify-center">
      <ProfileCard />
      {/* <WeatherCard /> */}
    </div>
  );
};

export default Body;
