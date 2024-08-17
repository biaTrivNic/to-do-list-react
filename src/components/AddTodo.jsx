import React, { useRef } from 'react';

function AddTodo() {
  const inputRef = useRef(null);

  const handleClick = () => {
    const valor = inputRef.current.value;
    console.log('Valor do input:', valor);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Digite algo" />
      <button onClick={handleClick}>Mostrar valor</button>
    </div>
  );
}

export default AddTodo;