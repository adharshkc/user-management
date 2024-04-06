import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const TableBody = (props) => {
  const {_id,name, email, phone} = props.data
  const userId = props.getId
  const handleClick = ()=>{
    userId(props.data)
  }

  const handleDelete=async(id)=>{
    try {
      const response = await fetch(`http://localhost:3000/deleteUser/${id}`)
      const json = await response.json()
      if(response.ok){
        props.deleteFun(id)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <tbody className="divide-y text-black divide-gray-200">
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
          <button onClick={()=>handleDelete(_id)}
            type="button"
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
          >
            <MdDelete/>
          </button>
        </td>
      </tr>

     
    </tbody>
  );
};

export default TableBody;
