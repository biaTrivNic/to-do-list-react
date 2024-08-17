import useDelTodo from "../hooks/useDelTodo";

const DeleteTodo = ({id}) => {

    const delTodo  = useDelTodo();

    return (
        <div>
            <button onClick={() => delTodo(id)}>excluir</button>
        </div>
    );
}

export default DeleteTodo;

