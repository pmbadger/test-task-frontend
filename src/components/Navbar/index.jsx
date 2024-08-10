import React, { useCallback } from "react";
import SearchInput from "./components/SearchInput";
import SortBy from "./components/SortBy";
import { useAuth } from "../../services/providers/AuthProvider/AuthProvider";
import { useSelector } from "react-redux";

const Navbar = ({ setItems, setIsLoading, setSortBy }) => {
    const auth = useAuth();
    const profile = useSelector(state => state.profile); 

    const handleLogOut = useCallback(() => {
        auth.logoutAction();
    }, [auth]);

    return (
        <nav className="navbar navbar-expand-lg sticky-top mb-3 bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container">
                <SearchInput setItems={setItems} setIsLoading={setIsLoading}/>
                <SortBy setSortBy={setSortBy} />
                <div className="justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mb-2 mb-lg-0">
                        <div className="nav-item">
                            <div className="nav-link">{profile?.email ?? ''}</div>
                        </div>
                        <div className="nav-item">
                        <button className="btn btn-outline-light" onClick={handleLogOut}>Logout</button>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;