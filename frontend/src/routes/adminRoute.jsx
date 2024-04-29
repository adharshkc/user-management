import { Routes, Route } from "react-router-dom";
import AdminPage from "../pages/adminPages/AdminPage";
import LoginPage from "../pages/adminPages/LoginPage";

const adminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  );
};

export default adminRoutes;
