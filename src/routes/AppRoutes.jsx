import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import TodoList from '../pages/TodoList';
import { AuthProvider } from '../context/AuthContext';

function AppRoutes() {
  return (
    <AuthProvider>

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/todo' element={<TodoList />}></Route>
      </Routes>
    </AuthProvider>

  )

}

export default AppRoutes;