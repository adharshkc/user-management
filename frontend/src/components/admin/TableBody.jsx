import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button, Modal } from "flowbite-react";


const TableBody = (props) => {
  const {_id,name, email, phone} = props.data
  const [openModal, setOpenModal] = useState(false);
  const userId = props.getId
  const delFun = props.delFun;
  const handleClick = ()=>{
    userId(props.data)
  }

  const handleDelete=async(id)=>{
   delFun(id)
  }
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
          <Link to={'/user_edit/'+_id}>
          
          <button
          onClick={()=>handleClick()}
            type="button"
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
          >
            <CiEdit />
          </button>
          </Link>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
          <button onClick={() => setOpenModal(true)}
            type="button"
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
            >
            <MdDelete/>
          </button>
                {/* <Button >Toggle modal</Button> */}
        </td>
      </tr>

     
    </tbody>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
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
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TableBody;
