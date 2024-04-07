import { useState } from "react";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import { Link,useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("")
    const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (name.length < 4) {
      toast.error("name should be minimum 3 letters");
      return;
    }
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    const validPhone = /^\d{10}$/;
    if (!validPhone.test(phone)) {
      toast.error("Please enter a valid number");
      return;
    }
    if (password.length < 5) {
        toast.error("Password should be more than 6 characters");
        return;
      }
    try {
      
        const response = await fetch("http://localhost:3000/addUser", {
          method:'POST',
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            password: password
          })
        })
        const data = await response.json()
        if(response.ok){ 
          navigate('/admin')
        }else{
          toast.error(data.error)
        }
  
      } catch (error) {
        console.log(error)
      }
  };
  return (
    <>
      <Navbar />
      <ToastContainer />
      <form className="max-w-md my-10 mx-auto" onSubmit={handleSubmit}>
        <h1 className="my-6">Add New User</h1>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="floating_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_name"
            className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform ${
              name ? "-translate-y-6 scale-75 top-3" : "top-3 scale-100"
            } -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform ${
              email ? "-translate-y-6 scale-75 top-3" : "top-3 scale-100"
            } -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="phone"
            id="floating_phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_phone"
            className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform ${
              phone ? "-translate-y-6 scale-75 top-3" : "top-3 scale-100"
            } -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Phone
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform ${
              password ? "-translate-y-6 scale-75 top-3" : "top-3 scale-100"
            } -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Password
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add User
        </button>
        <Link to="/admin">
          <button
            type="submit"
            className=" font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Go Back
          </button>
        </Link>
      </form>
    </>
  );
};

export default Form;
