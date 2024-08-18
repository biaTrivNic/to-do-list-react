import useConcluirTodo from "../hooks/useConcluirTodo";

const ConcluirTodo = ({id}) => {

    const concTodo  = useConcluirTodo();

    return (
        <div>
            <button onClick={() => concTodo(id)}>Done</button>
        </div>
    );
}

export default ConcluirTodo;

