import { useTodoListContext } from '../context/TodoListContext';
import TodoItem from './TodoItem';

function List() {
    const { listValue } = useTodoListContext();


    return (
        <div>
            <ul>
            {listValue.map((todo, index) => (
                    <TodoItem key={index} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default List;