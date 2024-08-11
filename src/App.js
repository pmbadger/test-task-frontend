import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import AuthProvider from "./services/providers/AuthProvider/AuthProvider";

import { Provider } from "react-redux";
import { store } from "./services/state/store";
import PrivateRoute from "./services/providers/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

function Logout() {
  localStorage.clear();
  return <LoginPage />
}


function RegisterAndLogout() {
  localStorage.clear();
  return <RegisterPage />
}

function App() {
  return (
    <div className="App vh-100">
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <Routes>
              <Route path="/register" element={<RegisterAndLogout />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<Logout />} />
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<MainPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />}/>
            </Routes>
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
