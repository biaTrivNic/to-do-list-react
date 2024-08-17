import { useRef } from 'react';
import { useTodoListContext } from '../context/TodoListContext';

const useAddTodo = () => {
    const titleRef = useRef("");
    const priorityRef = useRef("");
    const dateRef = useRef("");
    const statusRef = useRef("");
    const { setListValue } = useTodoListContext();

    const addTodo = () => {
        const titleValue = titleRef.current.value;
        const priorityValue = priorityRef.current.value;
        const dateValue = dateRef.current.value;
        const statusValue = statusRef.current.value;

        if (titleValue) {
            const todo = {
                title: titleValue,
                priority: priorityValue,
                date: dateValue,
                status: statusValue
            };

            setListValue(prevValue => [...prevValue, todo]);

            titleRef.current.value = '';
            priorityRef.current.value = 'baixa'; 
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
