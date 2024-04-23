import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/userPages/HomePage";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/user/login" element={<AddUserPage/>}/>
        <Route path="/admin/edit-user" element={<EditUserPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;