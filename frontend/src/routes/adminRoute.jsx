import { Routes, Route } from "react-router-dom";
import AdminPage from "../pages/adminPages/AdminPage";
import AddUserPage from "../pages/adminPages/AddUserPage";
import EditUserPage from "../pages/adminPages/EditUserPage";
import LoginPage from "../pages/adminPages/LoginPage";

const adminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminPage />} />
      <Route path="/add-user" element={<AddUserPage />} />
      <Route path="/admin/edit-user" element={<EditUserPage />} />
      <Route path="/admin/login" element={<LoginPage/>}/>
    </Routes>
  );
};

export default adminRoutes;
