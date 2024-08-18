import ConcluirTodo from "./ConcluirTodo";
import DeleteTodo from "./DeleteTodo";
import { useTodoListContext } from '../context/TodoListContext';

const TodoItem = ({ todo }) => {

    const { setModalStyle, setEditId } = useTodoListContext();

    const openModal = () => {
        setModalStyle({ display: 'block' });

        setEditId(todo.id)
    };


    return (
        <li>
            <h3>{todo.title}</h3>
            <p>Prioridade: {todo.priority}</p>
            <p>Status: {todo.status}</p>
            <p>Data: {todo.date}</p>
            <DeleteTodo id={todo.id} />
            <ConcluirTodo id={todo.id} />
            <button onClick={openModal}>edit</button>
        </li>
    );
}

export default TodoItem;