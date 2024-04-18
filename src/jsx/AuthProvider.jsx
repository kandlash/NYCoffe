import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(
        localStorage.getItem("isAdmin") === "true"
      );

  const login = () => {
    localStorage.setItem("isAdmin", true);
    setIsAdmin(true);
  };

  const logout = () => {
    localStorage.setItem("isAdmin", false);
    setIsAdmin(false);
    console.log("logout");
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
