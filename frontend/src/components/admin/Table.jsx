import TableBody from "./TableBody";
import useUserData from "../../utils/useUserData";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import useGetFetch from "../../utils/useGetFetch";
const tableHead = ["NAME", "EMAIL", "PHONE", "EDIT", "DELETE"];
import useDeleteFetch from "../../utils/useDeleteFetch";
import AddUser from "./AddUser";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import usePostFetch from "../../utils/usePostFetch";

const filterData = (searchInput, userList) => {
  const searchUser = userList.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return searchUser;
};

const Table = () => {
  const [userList, setUserList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterUser, setFilterUser] = useState([]);
  const [refresh, setRefresh] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [email, setEmail] = useState('');
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const fetchDelete = useDeleteFetch()
  const fetchPost = usePostFetch()
  const userData = useUserData();

  const { fetchData } = useGetFetch();

  const getData = async function () {
    try {
      const response = await fetchData("/admin/users");
      const users = response.data.data;
      setUserList(users);
      setFilterUser(users);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFun = async(userId) => {
    
    const response = await fetchDelete({id:userId}, '/admin/user-delete')
    setRefresh(prev =>prev+1)
  };
  useEffect(() => {
    getData();
  }, [refresh]);
  useEffect(() => {
    console.log("useEffect");
    if (userData) {
      setUserList(userData);
      setFilterUser(userData);
    }
  }, [userData]);

  // const handleClick=()=>{

  // }
  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
    setName('')
    setPhone('')

  }

  const addUserSubmit = async()=>{
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
    const data = {name, email, phone}
    const endPoint = "/admin/add-user"
    try {
      const response = await fetchPost(data, endPoint)
      console.log(response)
      toast(response.data.message)
      setOpenModal(false)
      setEmail('')
      setName('')
      setPhone('')
    setRefresh(prev =>prev+1)

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  if (userList == []) return <h1>Loading</h1>;
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg divide-y divide-gray-200">
              <div className="py-3 px-4 flex justify-between items-center">
                <div className="relative max-w-xs border-2 rounded-md flex-1 mr-2">
                  <label className="sr-only">Search</label>
                  <input
                    type="text"
                    name="hs-table-with-pagination-search"
                    id="hs-table-with-pagination-search"
                    value={searchInput}
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                      const data = filterData(e.target.value, userList);
                      setFilterUser(data);
                    }}
                    className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Search for items"
                  />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                    <svg
                      className="size-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </div>
                </div>
                {/* <Link to="/add_user"> */}
                  <button onClick={() => setOpenModal(true)} className="py-2 px-4 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Add User
                  </button>
                {/* </Link> */}
              </div>

              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {tableHead.map((item, index) => {
                        if (index < 3) {
                          return (
                            <th
                              key={index}
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                            >
                              {item}
                            </th>
                          );
                        } else {
                          return (
                            <th
                              key={index}
                              scope="col"
                              className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                            >
                              {item}
                            </th>
                          );
                        }
                      })}
                    </tr>
                  </thead>
                  {filterUser.map((item) => (
                    <TableBody
                      key={item._id}
                      delFun={deleteFun}
                      data={item}
                    />
                  ))}
                </table>
              </div>
              {/* <div className="py-1 px-4">
                <nav className="flex items-center space-x-1">
                  <button
                    type="button"
                    className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </button>
                </nav>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add New User</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Name" />
              </div>
              <TextInput
                id="name"
                placeholder="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Phone" />
              </div>
              <TextInput
                id="text"
                placeholder="phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            
            
            <div className="w-full">
              <Button onClick={addUserSubmit}>Add new user</Button>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Table;
