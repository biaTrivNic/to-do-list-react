import useIdentify from '../hooks/useIdentify';

const AuthForm = () => {

    const { userRef, addUsername } = useIdentify();


    return (
        <div>
            <input
                ref={userRef}
                type="text"
                placeholder="Digite seu nome"
                aria-label="Digite a tarefa" />
            <button onClick={addUsername}>Avançar</button>
        </div>
    );
}

export default AuthForm;
