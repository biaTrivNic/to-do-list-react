import React, { createContext, useState, useContext } from 'react';

const TodoListContext = createContext();

export const TodoProvider = ({ children }) => {
  const [listValue, setListValue] = useState([]);
  const [modalStyle, setModalStyle] = useState( { display: 'none' } );
  const [editId, setEditId] = useState("");

  return (
    <TodoListContext.Provider value={{ listValue, setListValue, modalStyle, setModalStyle, editId, setEditId }}>
      {children}
    </TodoListContext.Provider>
  );
};

export const useTodoListContext = () => useContext(TodoListContext); 