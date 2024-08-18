import ConcluirTodo from "./ConcluirTodo";
import DeleteTodo from "./DeleteTodo";

const TodoItem = ({ todo }) => {
    return (
        <li>
            <h3>{todo.title}</h3>
            <p>Prioridade: {todo.priority}</p>
            <p>Status: {todo.status}</p>
            <p>Data: {todo.date}</p>
            <DeleteTodo id={todo.id}/>
            <ConcluirTodo id={todo.id}/>
        </li>
    );
}

export default TodoItem;