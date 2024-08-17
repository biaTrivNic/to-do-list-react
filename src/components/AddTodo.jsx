import React from 'react';
import useAddTodo from '../hooks/useAddTodo';

function AddTodo() {
    const { titleRef, priorityRef, dateRef, statusRef, addTodo } = useAddTodo();

    return (
        <div>
            <input
                ref={titleRef}
                type="text"
                placeholder="Digite a tarefa"
                aria-label="Digite a tarefa" />
            <select
                ref={priorityRef}
                defaultValue="low"
                aria-label="Escolha a prioridade">
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
            </select>
            <select
                ref={statusRef}
                defaultValue="pendente"
                aria-label="Escolha o status">
                <option value="pendente">Pendente</option>
                <option value="em andamento">Em Andamento</option>
                <option value="concluída">Concluída</option>
            </select>
            <input
                ref={dateRef}
                type="date"
                aria-label="Escolha a data de vencimento" />
            <button onClick={addTodo}>Adicionar</button>
        </div>
    );
}

export default AddTodo;
