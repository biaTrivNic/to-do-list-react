import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import TodoList from '../pages/TodoList';
import { AuthProvider } from '../context/AuthContext';
import PrivateRoute from './PrivateRoute';

function AppRoutes() {
  return (
    <AuthProvider>

      <Routes>
        <Route path='/' element={<Login />}></Route>
          <Route path='/todo' element={<PrivateRoute><TodoList /></PrivateRoute>}></Route>
      </Routes>
    </AuthProvider>

  )

}

export default AppRoutes;