import { useRef } from 'react';
import { useTodoListContext } from '../context/TodoListContext';

const useAddTodo = () => {
    const titleRef = useRef(null);
    const priorityRef = useRef(null);
    const dateRef = useRef(null);
    const statusRef = useRef(null);
    const { listValue, setListValue } = useTodoListContext();

    const addTodo = () => {
        const textValue = titleRef.current.value;
        const priorityValue = priorityRef.current.value;
        const dateValue = dateRef.current.value;
        const statusValue = statusRef.current.value;

        if (textValue) {
            const todo = {
                title: textValue,
                priority: priorityValue,
                date: dateValue,
                status: statusValue
            };

            setListValue(prevValue => [...prevValue, todo]);

            titleRef.current.value = '';
            priorityRef.current.value = 'low'; 
            dateRef.current.value = '';
            statusRef.current.value = 'pendente';
        }
    };

    return {
        titleRef,
        priorityRef,
        dateRef,
        statusRef,
        addTodo
    };
};

export default useAddTodo;
