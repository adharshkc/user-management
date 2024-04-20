import { useState } from "react";
import { useSelector } from "react-redux";

const Todo = () => {
    const [input, setInput] = useState('')
    // const [todo, setTodo] = useState([])
    const todoList = useSelector((store)=>store.todo.items)
  return (
    <>
      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <div className="flex">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded px-4 py-2 mr-2"
            placeholder="Enter your todo..."
              value={input}
            //   onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            //   onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <ul className="mt-4">
          {/* {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between py-2 border-b">
            <span>{todo}</span>
            <button
              className="text-red-500 hover:text-red-600"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))} */}
        {todoList.map((todo, index)=>(
           <li key={index} className="flex items-center justify-between py-2 border-b">
            {console.log(todo)}
            <span>{todo}</span>
           </li>
))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
