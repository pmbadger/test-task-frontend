import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthProvider/AuthProvider";
import LoadingPage from "../../../pages/LoadingPage";
import { getMyProfile } from "../../api/auth";
import { useDispatch } from "react-redux";
import { setProfile } from "../../state/profile/profileSlice";

const PrivateRoute = () => {
  const { isAuthorized } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    getMyProfile().then(res => {
        dispatch(setProfile(res.data));
    });
}, [dispatch]);

  if (isAuthorized === null) {
    return <LoadingPage />;
  }
  
  if (!isAuthorized) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;