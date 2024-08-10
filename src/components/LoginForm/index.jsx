import React, { useCallback, useMemo, useState } from "react";
import FormInput from "./components/FormInput";

// This form use both for login and register
const LoginForm = ({ handleSubmit, mode = 'register' }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fortTitle = useMemo(() => mode === 'register' ? "Create account" : "Login", [mode]);

    const submitForm = useCallback(e => {
        e.preventDefault();
        let userInfo = { username, password, password2: password };
        if (mode === 'register') {
            userInfo = {...userInfo, first_name: firstName, last_name: lastName, email};
        }
        handleSubmit(userInfo);
    }, [email, username, password, firstName, lastName, mode, handleSubmit]);

    return (
        <form className="card mh-50 p-3 border-primary shadow-lg bg-body-tertiary" style={{ width: '24rem' }}>
            <legend className="h2 text-primary">{fortTitle}</legend>
            {mode === 'register' ?
                <>
                    <FormInput value={email} setValue={setEmail} title={"Email"} valueType="email" inputType="email" />
                    <FormInput value={firstName} setValue={setFirstName} title={"First Name"} valueType="firstname" inputType="text" />
                    <FormInput value={lastName} setValue={setLastName} title={"Last Name"} valueType="lastname" inputType="text" />
                </>
            : null}
            <FormInput value={username} setValue={setUsername} title={"Username"} valueType="name" inputType="text" />
            <FormInput value={password} setValue={setPassword} title={"Password"} valueType="password" inputType="password" />
            <button className="btn btn-primary" onClick={submitForm}>Submit</button>
        </form>
    );
};

export default LoginForm