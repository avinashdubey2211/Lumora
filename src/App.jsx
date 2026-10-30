

import { useEffect } from "react";
import "./App.css";

import { Route, Routes, useLocation, Navigate } from "react-router-dom";

import Layout from "./Layout";
import Pages from "./Pages";
import { routes } from "./Routes";
import Login from "./Component/Login";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Login Page */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
        />

        {/* Home Page */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Layout>
                <Pages />
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Other Pages */}
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              isLoggedIn ? (
                <Layout>{route.element}</Layout>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        ))}

        {/* Invalid URL */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
