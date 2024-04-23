
import Table from "../../components/admin/Table";
import AdminBody from "../../components/admin/AdminBody";

const AdminPage = () => {
  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const token = localStorage.getItem("token");
  //       const response = await fetch("http://localhost:3000/admin", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `${token}`,
  //         },
  //       });
  //       if (!response.ok) {
  //         console.log("eroor");
  //         navigate("/");
  //         throw new Error("failed to fetch data");
  //       }
  //       const data = await response.json();
  //       if (data.error) {
  //         navigate("/");
  //         return;
  //       }
  //     };

  //     fetchData();
  //   } catch (error) {
  //     navigate("/");
  //   }
  // });
  return (
    <div>
      <AdminBody>
        <Table/>
      </AdminBody>
    </div>
  );
};

export default AdminPage;
