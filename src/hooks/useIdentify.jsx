import { useRef } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const useIdentify = () => {
    const userRef = useRef("");
    const navigate = useNavigate(); 

    const { setUsername } = useAuthContext();


    const addUsername = () => {
        const username = userRef.current.value;

        if (username != "") {
            setUsername(username);

            navigate('/todo');

        }

    };

    return {
        userRef,
        addUsername
    };
};

export default useIdentify;
