import { useNavigate } from 'react-router-dom';


const Logout = () => {

    const navigate = useNavigate(); 

    const handleClick = () => {

        navigate('/');

    }

    return (
        <div>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
}

export default Logout;