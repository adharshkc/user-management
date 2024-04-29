import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import usePutFetch from "../../utils/usePutFetch";

const TableBody = (props) => {
  const { _id, name, email, phone } = props.data;
  const [openDelModal, setopenDelModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [editName, setEditName] = useState(name);
  const [error, setError] = useState(null);
  const [editPhone, setEditPhone] = useState(phone);
  const fetchPut = usePutFetch();
  const delFun = props.delFun;
  const refresh = props.refresh;
  function onCloseModal() {
    setOpenModal(false);
    setEditName(name);
    setEditPhone(phone);
    setError(null);
  }

  async function editUserSubmit() {
    if (editName.trim().length < 3) {
      setError("Name should be minimum 3 letters");
      return;
    }
    const stringPhone = editPhone.toString().trim();
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(stringPhone)) {
      setError("Please enter a valid 10-digit number without spaces");
      return;
    }
    const data = { name: editName, phone: editPhone, id: _id };
    const endPoint = "/admin/edit-user";
    try {
      const response = await fetchPut(data, endPoint);
      refresh();
      setOpenModal(false);
      setError('')
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    delFun(id);
  };
  return (
    <>
      <tbody className=" font-bold divide-y text-black divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
            {name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
            {email}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {phone}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
            <button
              onClick={() => setOpenModal(true)}
              type="button"
              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
            >
              <CiEdit />
            </button>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
            <button
              onClick={() => setopenDelModal(true)}
              type="button"
              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
            >
              <MdDelete />
            </button>
          </td>
        </tr>
      </tbody>
      <Modal
        show={openDelModal}
        size="md"
        onClose={() => setopenDelModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => handleDelete(_id)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setopenDelModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Update {editName}
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Name" />
              </div>
              <TextInput
                id="name"
                placeholder="name"
                value={editName}
                onChange={(event) => setEditName(event.target.value)}
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
                value={editPhone}
                onChange={(event) => setEditPhone(event.target.value)}
                required
              />
            </div>
            <span className="text-red-600">{error}</span>

            <div className="w-full">
              <Button onClick={() => editUserSubmit()}>Update user</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TableBody;
