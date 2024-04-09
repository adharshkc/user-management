import Body from "../components/Body";
import Navbar from "../components/Navbar";
// import UserProvider from "../context/UserContext";

const HomePage = () => {
  return (
    <div>
      {/* <UserProvider> */}
        <Navbar />
      {/* </UserProvider> */}
      <Body />
    </div>
  );
};

export default HomePage;
