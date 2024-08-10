import React from "react";
import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../services/providers/AuthProvider/AuthProvider";

const RegisterPage = () => {
    const auth = useAuth();

    const handleSubmit = (result) => {
        if (result.password?.length > 0 && result.username?.length > 0 && result.email?.length > 0) {
            auth.registerAction({ data: result });
        };
    };

    return (
        <div className="container h-100 my-3 d-flex justify-content-center align-items-center">
            <LoginForm handleSubmit={handleSubmit} mode="register" />
        </div>
    );
};

export default RegisterPage;