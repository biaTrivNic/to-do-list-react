import React, { createContext, useState, useContext } from 'react';

const TodoListContext = createContext();

export const TodoProvider = ({ children }) => {
  const [listValue, setListValue] = useState('');
  const [todoValue, setTodoValue] = useState('');

  return (
    <TodoListContext.Provider value={{ listValue, setListValue, todoValue, setTodoValue }}>
      {children}
    </TodoListContext.Provider>
  );
};

export const useTodoListContext = () => useContext(TodoListContext); 