import Body from "../../components/user/Body";
import Navbar from "../../components/common/Navbar";
// import UserProvider from "../context/UserContext";

const HomePage = () => {
  return (
    <div>
      {/* <UserProvider> */}
        <Navbar role={"user"}/>
      {/* </UserProvider> */}
      <Body />
    </div>
  );
};

export default HomePage;
