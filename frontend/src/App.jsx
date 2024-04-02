import {createBrowserRouter, Outlet} from "react-router-dom"
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";


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
        path:'/login',
        element:<LoginPage/>
      },
      {
        path:'/register',
        element:<RegisterPage/>
      }
    ]
  }
])

export default appRouter;
