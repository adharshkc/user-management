import {createBrowserRouter, Outlet} from "react-router-dom"
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import Form from "./components/Form";
import EditUser from "./components/EditUser";


function AppLayout() {
  return (
    <>
      <Outlet/>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children: [
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/login',
        element:<LoginPage/>
      },
      {
        path:'/register',
        element:<RegisterPage/>
      },
      {
        path:'/admin',
        element:<AdminPage/>
      },
      {
        path:'/add_user',
        element:<Form/>
      },
      {
        path:'/user_edit/:userId',
        element:<EditUser/>
      },
    ]
  }
])

export default appRouter;
