import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Pages from "./Pages";
import { routes } from "./Routes";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element=<Layout>
            <Pages />
          </Layout>
        />
        {/* Other Pages from routes.jsx */}
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<Layout>{route.element}</Layout>}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
