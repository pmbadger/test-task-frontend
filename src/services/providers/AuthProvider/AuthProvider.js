import { useContext, createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearProfile, setProfile } from "../../state/profile/profileSlice";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/consts";
import { jwtDecode } from "jwt-decode";
import { authLogin, postRegister, tokenRefresh } from "../../api/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = tokenRefresh({ refresh: refreshToken });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }

        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        }

        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }
    };

    const loginAction = async ({ data }) => {
        try {
        authLogin(data).then(res => {
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            setIsAuthorized(true);
            dispatch(setProfile(data));
            navigate("/");
            return;
        }).catch(err => {
            setIsAuthorized(false);
            throw new Error(err.message);
        });
        } catch (err) {
        console.error(err);
        }
    };

    const registerAction = async ({ data }) => {
        try {
            postRegister(data).then(() => {
                navigate("/login");
            }).catch(err => {
                setIsAuthorized(false);
            });
        } catch (err) {
            setIsAuthorized(false);
            throw new Error(err.message);
        }
    };

    const logoutAction = () => {
        dispatch(clearProfile());
        navigate('/logout');
    };

    return (
        <AuthContext.Provider value={{ isAuthorized, loginAction, registerAction, logoutAction }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};