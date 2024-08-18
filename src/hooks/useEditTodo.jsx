import { useRef } from 'react';
import { useTodoListContext } from '../context/TodoListContext';

const useEditTodo = () => {
    const titleRef = useRef(null);
    const priorityRef = useRef(null);
    const dateRef = useRef(null);
    const statusRef = useRef(null);

    const { listValue, setListValue, setModalStyle } = useTodoListContext();

    const editTodo = (id) => {
        const titleValue = titleRef.current.value;
        const priorityValue = priorityRef.current.value;
        const dateValue = dateRef.current.value;
        const statusValue = statusRef.current.value;

        if (titleValue) {
            const editedTodo = {
                id,
                title: titleValue,
                priority: priorityValue,
                date: dateValue,
                status: statusValue
            };

            const newList = listValue.map((todo) => 
                todo.id === id ? editedTodo : todo
            );

            setListValue(newList);
            setModalStyle({ display: 'none' });
        }
    };

    return {
        titleRef,
        priorityRef,
        dateRef,
        statusRef,
        editTodo
    };
};

export default useEditTodo;
