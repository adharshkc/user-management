import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/adminPages/AdminPage";
import AddUserPage from "../pages/adminPages/AddUserPage";
import EditUserPage from "../pages/adminPages/EditUserPage";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/add-user" element={<AddUserPage/>}/>
        <Route path="/admin/edit-user" element={<EditUserPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;