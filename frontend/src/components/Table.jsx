import TableBody from "./TableBody";
import useUserData from "../utils/useUserData";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
const tableHead = ["NAME", "EMAIL", "PHONE", "EDIT", "DELETE"];

const filterData = (searchInput, userList) => {
  const searchUser = userList.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return searchUser
};

const Table = () => {
  const [userList, setUserList] = useState([]);
  const [searchInput, setSearchInput] = useState("")
  const [filterUser, setFilterUser] = useState([]);
  const userData = useUserData();
  const deleteFun = (userId) => {
    const newUser = userList.filter((user) => user._id !== userId);
    setUserList(newUser);
    setFilterUser(newUser);
    toast("User Deleted Successfully");
  };
  useEffect(() => {
    console.log("useEffect");
    if (userData) {
      setUserList(userData);
      setFilterUser(userData);
    }
  }, [userData]);

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
                      setSearchInput(e.target.value)
                      const data = filterData(e.target.value, userList);
                      setFilterUser(data)
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
                <Link to="/add_user">
                  <button className="py-2 px-4 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Add User
                  </button>
                </Link>
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
                      deleteFun={deleteFun}
                      data={item}
                    />
                  ))}
                </table>
              </div>
              <div className="py-1 px-4">
                <nav className="flex items-center space-x-1">
                  <button
                    type="button"
                    className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </button>
                  {/* Render pagination buttons dynamically */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
