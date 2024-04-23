import {createBrowserRouter, Outlet} from "react-router-dom"
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/userPages/RegisterPage";
import HomePage from "./pages/userPages/HomePage";
import AdminPage from "./pages/adminPages/AdminPage";
import Form from "./components/admin/Form";
import EditUser from "./components/admin/EditUser";
import UserProvider from "./context/UserContext";
function AppLayout() {
  return (
    
    <UserProvider>

    <>
      <Outlet/>
    </>

    </UserProvider>

    
  );
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children: [
      {
        path:'/home',
        element:<HomePage/>
      },
      {
        path:'/',
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
      }
    ]
  }
])

export default appRouter;
