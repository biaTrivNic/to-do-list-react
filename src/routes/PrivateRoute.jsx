import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { username } = useAuthContext();

    if (!username) {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;
