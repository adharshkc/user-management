import Login from "../common/Login";
import usePostFetch from "../../utils/usePostFetch";

const AdminLogin = () => {
  const { response, error, fetchPost } = usePostFetch();
  const handleClick = (email, password) => {
    const data = { email, password };
    const endPoint = "/admin/login";
    fetchPost(data, endPoint);
    if (response) {
      console.log("response", response);
      return null
    }
    if (error) {
      console.log("error", error.response.data.message);
      return error?.response?.data?.message
    }
    
  };

  return (
    <div>
      <Login role={"admin"} handleFunc={handleClick} />
    </div>
  );
};

export default AdminLogin;
