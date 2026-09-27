import { useState, useEffect } from "react";
import "./App.css";
import Lodingpage from "./pages/Lodingpage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  useEffect(() => {
    const checkRoute = () => {
      const isHashAdmin = window.location.hash === "#admin";
      const isPathAdmin = window.location.pathname === "/admin";
      setIsAdminRoute(isHashAdmin || isPathAdmin);
    };

    checkRoute();
    window.addEventListener("hashchange", checkRoute);
    window.addEventListener("popstate", checkRoute);

    return () => {
      window.removeEventListener("hashchange", checkRoute);
      window.removeEventListener("popstate", checkRoute);
    };
  }, []);

  if (isAdminRoute) {
    return <AdminDashboard />;
  }

  return <Lodingpage />;
}

export default App;
