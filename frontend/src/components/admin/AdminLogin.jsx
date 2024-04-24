import Login from "../common/Login";
import usePostFetch from "../../utils/usePostFetch";

const AdminLogin = () => {
  const { response, isLoading, error, fetchPost } = usePostFetch();
  const handleClick = (email, password) => {
    const data = { email, password };
    const endPoint = "/admin/login";
    fetchPost(data, endPoint);
    if (response) {
      console.log("response", response);
    }
    if (error) {
      console.log("error", error);
    }
    
  };

  return (
    <div>
      <Login role={"admin"} loading={isLoading} handleFunc={handleClick} />
    </div>
  );
};

export default AdminLogin;
