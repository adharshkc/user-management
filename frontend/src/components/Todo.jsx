import { useState } from "react";

const Todo = () => {
    const [input, setInput] = useState('')
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
        </ul>
      </div>
    </>
  );
};

export default Todo;
