import Navbar from "../common/Navbar";

const AdminBody = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default AdminBody;
