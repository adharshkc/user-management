import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/userPages/HomePage";
import LoginPage from "../pages/userPages/LoginPage";
import RegisterPage from "../pages/userPages/RegisterPage";

const userRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default userRoutes;
