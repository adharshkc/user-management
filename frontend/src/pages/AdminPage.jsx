import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const fetchData = async () => {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3000/admin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        if (!response.ok) {
          console.log("eroor");
          navigate("/");
          throw new Error("failed to fetch data");
        }
        const data = await response.json();
        if (data.error) {
          navigate("/");
          return;
        }
      };

      fetchData();
    } catch (error) {
      navigate("/");
    }
  });
  return (
    <div>
      <Navbar />
      <Table />
    </div>
  );
};

export default AdminPage;
