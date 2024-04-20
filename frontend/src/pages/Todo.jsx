import Navbar from "../components/Navbar";
import Todo from "../components/Todo";
import { Provider } from "react-redux";
import todoStore from "../reducer/todoStore";

const TodoPage = () => {
  return (
    <div>
      <Navbar />
      <Provider store={todoStore}>
        <Todo />
      </Provider>
    </div>
  );
};

export default TodoPage;
