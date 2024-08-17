import AddTodo from "../components/AddTodo";
import List from "../components/List";
import { TodoProvider } from "../context/TodoListContext";

const TodoList = () => {
    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <TodoProvider>
        <AddTodo/>
        <List/>
        </TodoProvider>
      </div>
    );
};

export default TodoList;