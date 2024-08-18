import { useTodoListContext } from '../context/TodoListContext';

const useConcluirTodo = () => {
    const { listValue, setListValue } = useTodoListContext();

    const concTodo = (id) => {
        const newList = listValue.map((todo) => 
            todo.id === id ? { ...todo, status: "concluída" } : todo
        );

        setListValue(newList);
    };

    return concTodo;
};

export default useConcluirTodo;

