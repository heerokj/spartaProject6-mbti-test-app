import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import { useContext } from "react";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/mypage" />;
};
const Router = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<PublicRoute element={Login} />} />
            <Route path="/signup" element={<PublicRoute element={Signup} />} />
            <Route
              path="/Profile"
              element={<PrivateRoute element={Profile} />}
            />
            <Route
              path="/TestPage"
              element={<PrivateRoute element={TestPage} />}
            />
            <Route
              path="/TestResultPage"
              element={<PrivateRoute element={TestResultPage} />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default Router;
