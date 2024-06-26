import Login from "../common/Login";
import usePostFetch from "../../utils/usePostFetch";
import { useDispatch } from "react-redux";
import { addAdmin } from "../../redux/slices/adminSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useGetFetch from "../../utils/useGetFetch";

const AdminLogin = () => {
  const {fetchData} = useGetFetch()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchPost = usePostFetch();
  const getData = async function(){
    try {
      const response = await fetchData('/admin/')
      if(!response){
        navigate("/admin/login")
      }
      navigate("/admin")
    } catch (error) {
      navigate("/admin/login")
     } 
  }
  useEffect(()=>{
     getData()
  }, [])
  const handleClick = async (email, password) => {
    const data = { email, password };
    const endPoint = "/admin/login";
    try {
      const response = await fetchPost(data, endPoint);
      dispatch(
        addAdmin({
          name: response.data.admin.name,
          email: response.data.admin.email,
        })
      );
      const adminData = {
        name: response.data.admin.name,
        email: response.data.admin.email,
        token: response.data.token
      }
      localStorage.setItem("user", JSON.stringify(adminData))
      navigate('/admin')
    } catch (error) {
      throw error.response.data.message;
    }
  };

  return (
    <div>
      <Login role={"admin"} handleFunc={handleClick} />
    </div>
  );
};

export default AdminLogin;
