import React from "react";

const LoadingPage = () => {
    return (
        <div className="container vh-100 d-flex flex-column mb-3">
            <div className="spinner-border text-primary m-auto" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingPage;