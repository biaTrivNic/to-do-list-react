import AddTodo from "../components/AddTodo";
import List from "../components/List";
import { TodoProvider } from "../context/TodoListContext";
import { useAuthContext } from '../context/AuthContext';
import Logout from "../components/Logout";

const TodoList = () => {


    const { username } = useAuthContext();

    return (
      <div>
        <h1>Olá, {username}</h1>
        <h1>Lista de Tarefas</h1>
        <TodoProvider>
        <AddTodo/>
        <List/>
        </TodoProvider>
        <Logout/>
      </div>
    );
};

export default TodoList;