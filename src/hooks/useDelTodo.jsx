import { useTodoListContext } from '../context/TodoListContext';

const useDelTodo = () => {
    const { listValue, setListValue } = useTodoListContext();

    const delTodo = (id) => {

        const newList = listValue.filter(todo => todo.id !== id);

        setListValue(newList);

    };

    return delTodo
};

export default useDelTodo;
