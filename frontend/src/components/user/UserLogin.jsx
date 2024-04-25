import Login from "../common/Login";
import usePostFetch from "../../utils/usePostFetch";
import { useDispatch } from "react-redux";
import {addUser} from "../../redux/slices/userSlice"
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  // const { response, error, fetchPost } = usePostFetch();
  const dispatch = useDispatch();
  const fetchPost = usePostFetch()
  const navigate = useNavigate()
  const handleClick = async (email, password) => {
    const data = { email, password };
    const endPoint = "/user/login";
    try {
      const response = await fetchPost(data, endPoint);
      console.log(response.data.user.name)
      dispatch(
        addUser({
          name: response.data.user.name,
          email: response.data.user.email,
        })
      )

      const userData = {
        name: response.data.user.name,
        email: response.data.user.email,
        token: response.data.token
      }
      localStorage.setItem("user", JSON.stringify(userData))
      console.log("hello")
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
