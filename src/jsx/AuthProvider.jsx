import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(
      localStorage.getItem("isAdmin") === "true");

  const [isEmploye, setIsEmploye] = useState(
    localStorage.getItem("isEmploye") === "true");

  const [isWorker, setIsWorker] = useState(
    localStorage.getItem("isWorker") === "true");

  const login = () => {
    localStorage.setItem("isAdmin", true);
    console.log("setted admin true");
    setIsAdmin(true);
  };

  const logout = () => {
    localStorage.setItem("isAdmin", false);
    setIsAdmin(false);
    console.log("logout");
  };

  const loginAsEmp = () =>{
    localStorage.setItem("isEmploye", true);
    setIsEmploye(true);
  }

  const logoutAsEmp = () =>{
    localStorage.setItem("isEmploye", false);
    setIsEmploye(false);
  }

  const loginAsWorker = () =>{
    localStorage.setItem("isWorker", true);
    setIsWorker(true);
  }

  const logoutAsWorker = () =>{
    localStorage.setItem("isWorker", false);
    setIsWorker(false);
  }


  return (
    <AuthContext.Provider value={{ isAdmin, login, logout,
                                   isEmploye, loginAsEmp, logoutAsEmp,
                                   isWorker, loginAsWorker, logoutAsWorker }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
