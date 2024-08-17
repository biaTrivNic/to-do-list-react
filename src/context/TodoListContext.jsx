import React, { createContext, useState, useContext } from 'react';

const TodoListContext = createContext();

export const TodoProvider = ({ children }) => {
  const [listValue, setListValue] = useState([]);

  return (
    <TodoListContext.Provider value={{ listValue, setListValue }}>
      {children}
    </TodoListContext.Provider>
  );
};

export const useTodoListContext = () => useContext(TodoListContext); 