import { useTodoListContext } from '../context/TodoListContext';
import { useState, useEffect } from 'react';
import useEditTodo from '../hooks/useEditTodo';

const EditTodo = () => {
    const { listValue, modalStyle, editId } = useTodoListContext();
    const [todo, setTodo] = useState(null);
    const { titleRef, priorityRef, dateRef, statusRef, editTodo } = useEditTodo();

    useEffect(() => {
        if (modalStyle.display === 'block' && editId) {
            const foundTodo = listValue.find(todo => todo.id === editId);
            setTodo(foundTodo || {});
        }
    }, [modalStyle, editId, listValue]);

    if (!todo) return null; 
    return (
        <div style={modalStyle}>
            <h1>Editar</h1>
            <div>
                <input
                    ref={titleRef}
                    type="text"
                    placeholder="Digite a tarefa"
                    aria-label="Digite a tarefa"
                    defaultValue={todo.title || ''} />
                <select
                    ref={priorityRef}
                    defaultValue={todo.priority || "low"}
                    aria-label="Escolha a prioridade">
                    <option value="baixa">Baixa</option>
                    <option value="media">Média</option>
                    <option value="alta">Alta</option>
                </select>
                <select
                    ref={statusRef}
                    defaultValue={todo.status || "pendente"}
                    aria-label="Escolha o status">
                    <option value="pendente">Pendente</option>
                    <option value="em andamento">Em Andamento</option>
                    <option value="concluída">Concluída</option>
                </select>
                <input
                    ref={dateRef}
                    type="date"
                    aria-label="Escolha a data de vencimento"
                    defaultValue={todo.date || ''} />
                <button onClick={() => editTodo(todo.id)}>Salvar</button>
            </div>
        </div>
    );
}

export default EditTodo;
