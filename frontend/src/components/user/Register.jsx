import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usePostFetch from "../../utils/usePostFetch";
import useGetFetch from "../../utils/useGetFetch";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate()
  const fetchPost = usePostFetch()
  const fetchData = useGetFetch()
  const getData = async function(){
    try {
      const response = await fetchData('/user/home')
      console.log("response", response)
      if(!response){
        navigate("/login")
      }
      navigate("/")
    } catch (error) {
      console.log("error", error)
      navigate("/login")
     } 
  }
  useEffect(()=>{
     getData()
  }, [])
  const validateForm = async(e) => {
    e.preventDefault();
    console.log(typeof phone);
    console.log(typeof phone);
    if (!/^[a-zA-Z]+$/.test(name.trim())) {
      toast.error("Name should only contain letters");
      return;
    }
    
    if (name.trim().length < 3) {
      toast.error("Name should be minimum 3 letters");
      return;
    }
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    const phoneWithoutSpaces = phone.replace(/\s/g, ''); 
    const validPhone = /^\d{10}$/;
    if (!validPhone.test(phoneWithoutSpaces)) {
      console.log(typeof phone);
      toast.error("Please enter a valid 10-digit number without spaces");
      return;
    }
    if (password.trim().length < 6) {
      toast.error("Password should be more than 6 characters");
      return;
    }
    

    try {
      const data = {name, email, phone, password}
      const endPoint = '/user/register'
      const response = await fetchPost(data, endPoint)
     console.log("name",response.data.token)

     const userData = {
      name: response.data.data.name,
      email: response.data.data.email,
      phone: response.data.data.phone,
      token: response.data.token
    }
    localStorage.setItem("user", JSON.stringify(userData))
    navigate("/")
    } catch (error) {
      console.log(error.response.data.error)
      toast.error(error.response.data.error)
    }

  };
  return (
    <div className="flex min-h-full border-50 flex-1 flex-col justify-center px-6 py-5 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-boledt active d leading-9 tracking-tight text-gray-900">
          Create a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <ToastContainer />
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone
              </label>
            </div>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="numeric"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="phone"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={validateForm}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
