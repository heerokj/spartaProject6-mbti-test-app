import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import TestPage from "../pages/TestPage";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../pages/Profile";
import TestResultPage from "../pages/TestResultPage";
import Layout from "../components/Layout";

const Router = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Layout user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Profile user={user} setUser={setUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/test"
            element={
              <ProtectedRoute user={user}>
                <TestPage user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/results"
            element={
              <ProtectedRoute user={user}>
                <TestResultPage user={user} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
