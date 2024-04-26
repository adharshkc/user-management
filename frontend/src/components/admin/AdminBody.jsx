import { useNavigate } from "react-router-dom";
import useGetFetch from "../../utils/useGetFetch";
import Navbar from "../common/Navbar";
import { useEffect } from "react";

const AdminBody = ({ children }) => {

  const navigate = useNavigate();
  const {fetchData} = useGetFetch()


  const fetchGetData = async function () {

   try {
     const response = await fetchData("/user/home");
     console.log("hello",response);
     if(!response){
       navigate("/admin/login")
     }
   } catch (error) {
      navigate("/admin/login")
   }
  };

  useEffect(() => {
    fetchGetData();
  }, []);
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default AdminBody;
