
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/adminRoute";
import UserRoutes from "./routes/userRoute";


function App (){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminRoutes/>}/>
      <Route path="/*" element={<UserRoutes/>}/>
    </Routes>
    </BrowserRouter>
  )
}




export default App;
