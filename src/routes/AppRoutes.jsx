import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import TodoList from '../pages/TodoList';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/todo' element={<TodoList/>}></Route>
        </Routes>
    )

}

export default AppRoutes;