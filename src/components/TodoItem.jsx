const TodoItem = ({ todo }) => {
    return (
        <li>
            <h3>{todo.title}</h3>
            <p>Prioridade: {todo.priority}</p>
            <p>Status: {todo.status}</p>
            <p>Data: {todo.date}</p>
            <button>excluir</button>
        </li>
    );
}

export default TodoItem;