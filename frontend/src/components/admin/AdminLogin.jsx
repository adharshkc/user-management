import Login from "../common/Login";
import usePostFetch from "../../utils/usePostFetch";
import { useDispatch } from "react-redux";
import { addAdmin } from "../../redux/slices/adminSlice";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  // const { response, error, fetchPost } = usePostFetch();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchPost = usePostFetch();
  const handleClick = async (email, password) => {
    const data = { email, password };
    const endPoint = "/admin/login";
    try {
      const response = await fetchPost(data, endPoint);
      console.log(response.data.token);
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
      localStorage.setItem("admin", JSON.stringify(adminData))
      navigate('/admin')
    } catch (error) {
      console.log(error);
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
