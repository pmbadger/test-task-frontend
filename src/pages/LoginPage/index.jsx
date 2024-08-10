import React, { useCallback } from "react";
import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../services/providers/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (result) => {
        if (result.password?.length > 0 && result.username?.length > 0) {
            auth.loginAction({
                data: {
                    password: result.password,
                    username: result.username,
            }});
        };
    };

    const handleRegisterClick = useCallback(e => {
        e.preventDefault();
        localStorage.clear();
        navigate('/register');
    }, [navigate]);

    return (
        <div className="container h-100 my-3 d-flex flex-column justify-content-center align-items-center">
            <LoginForm handleSubmit={handleSubmit} mode="login" />
            <div className="p-3" style={{ width: '24rem' }}>
                <button className="btn btn-primary w-100" onClick={handleRegisterClick}>Register</button>
            </div>
        </div>
    );
};

export default LoginPage;