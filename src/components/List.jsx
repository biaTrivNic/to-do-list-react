import { useTodoListContext } from '../context/TodoListContext';
import TodoItem from './TodoItem';

const List = () => {
    const { listValue } = useTodoListContext();


    return (
        <div>
            <ul>
            {listValue.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default List;