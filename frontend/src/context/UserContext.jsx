// import { createContext, useContext, useState } from "react";

// export const userContext = createContext();

// export const useUser = () => useContext(userContext);

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({username: "",
//   userEmail: ""
// });
//   const userRole = localStorage.getItem("user");
//   const loginUser = (userData) => {
//     console.log("user: ",userData)
//     const userD = localStorage.setItem("user", userData)
//     console.log("userD", userD)
//     setUser({username: userData.name, userEmail: userData.email})
//     // return setUser(localStorage.setItem("user", userData));
//   };
//   console.log("user", user)
//   console.log("userROle", userRole)
//   console.log("login", loginUser)
//   const logoutUser = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <userContext.Provider value={{ user, userRole, loginUser, logoutUser }}>
//       {children}
//     </userContext.Provider>
//   );
// };

// export default UserProvider

import { createContext, useState } from "react";

export const UserContext = createContext({
  username: "",
  userRole: "",
  loginUser: ()=>{},
  logoutUser:()=>{}
})

function UserProvider({children}){
  const [username, setUsername] = useState('');

  const loginUser = (userData)=>{
    setUsername(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }
  const logoutUser = () => {
    setUsername(null);
    localStorage.removeItem('user');
  };
  return(
    <UserContext.Provider value={{username,loginUser,logoutUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;