import Login from "../common/Login";
import usePostFetch from "../../utils/usePostFetch";
import { useDispatch } from "react-redux";
import {addUser} from "../../redux/slices/userSlice"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useGetFetch from "../../utils/useGetFetch";

const UserLogin = () => {
  // const { response, error, fetchPost } = usePostFetch();
  const dispatch = useDispatch();
  const fetchPost = usePostFetch()
  const navigate = useNavigate()
  const {fetchData} = useGetFetch()
  const getData = async function(){
    try {
      const response = await fetchData('/user/home')
      if(!response){
        navigate("/login")
      }
      navigate("/")
    } catch (error) {
      navigate("/login")
     } 
  }
  useEffect(()=>{
     getData()
  }, [])
  const handleClick = async (email, password) => {
    const data = { email, password };
    const endPoint = "/user/login";
    try {
      const response = await fetchPost(data, endPoint);
      dispatch(
        addUser({
          name: response.data.user.name,
          email: response.data.user.email,
        })
      )

      const userData = {
        name: response.data.user.name,
        email: response.data.user.email,
        phone: response.data.user.phone,
        token: response.data.token
      }
      localStorage.setItem("user", JSON.stringify(userData))
      navigate('/')

    } catch (error) {
      throw error.response.data.message
      
    }
   
    
  };

  return (
    <div>
      <Login role={"user"}  handleFunc={handleClick} />
    </div>
  );
};

export default UserLogin;
