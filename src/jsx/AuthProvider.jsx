import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true");

  const [isEmploye, setIsEmploye] = useState(
    localStorage.getItem("isEmploye") === "true");

  const [isWorker, setIsWorker] = useState(
    localStorage.getItem("isWorker") === "true");

  const [isActivated, setIsActivated] = useState(
    localStorage.getItem("isActivated") === "true");

    const [clients, setClients] = useState(
      JSON.parse(localStorage.getItem("clientss")) || []
    );
    
    const saveClients = (newClients) => {
      setClients(newClients);
      localStorage.setItem("clientss", JSON.stringify(newClients));
    };
// localStorage.clear();
  const [weeks, setWeeks] = useState(
    // 
    JSON.parse(localStorage.getItem("weeks")) || []
    

  );

  const updateWeeks = (index, newWeek) => {
    const updatedWeeks = [...weeks];
    updatedWeeks[index] = newWeek;
    setWeeks(updatedWeeks);
    localStorage.setItem("weeks", JSON.stringify(updatedWeeks));
  }

  const addWeeks = (newWeeks) => {
    const updatedWeeks = [...weeks, newWeeks];
    setWeeks(updatedWeeks);
    localStorage.setItem("weeks", JSON.stringify(updatedWeeks));
  }

  const [adminWeeks, setAdminWeeks] = useState(
    // 
    JSON.parse(localStorage.getItem("adminWeeks")) || []

  );

  const changeAdminWeek = (index, newWeek) => {
    const updatedWeeks = [...weeks];
    updatedWeeks[index] = newWeek;
    setAdminWeeks(updatedWeeks);
    localStorage.setItem("adminWeeks", JSON.stringify(updatedWeeks));
  }

  const addAdminWeek = (newWeeks) => {
    const updatedWeeks = [...weeks, newWeeks];
    setAdminWeeks(updatedWeeks);
    localStorage.setItem("adminWeeks", JSON.stringify(updatedWeeks));
  }



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

  const loginAsEmp = () => {
    localStorage.setItem("isEmploye", true);
    setIsEmploye(true);
  }

  const logoutAsEmp = () => {
    localStorage.setItem("isEmploye", false);
    setIsEmploye(false);
  }

  const loginAsWorker = () => {
    localStorage.setItem("isWorker", true);
    setIsWorker(true);
  }

  const logoutAsWorker = () => {
    localStorage.setItem("isWorker", false);
    setIsWorker(false);
  }

  const activate = () => {
    localStorage.setItem("isActivated", true);
    setIsActivated(true);
  }

  const deActivate = () => {
    localStorage.setItem("isActivated", false);
    setIsActivated(false);
  }

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || []
  );
  
  const saveEmployees = (newEmployees) => {
    setEmployees(newEmployees);
    localStorage.setItem("employees", JSON.stringify(newEmployees));
  };
  


  return (
    <AuthContext.Provider value={{
      isAdmin, login, logout,
      isEmploye, loginAsEmp, logoutAsEmp,
      isWorker, loginAsWorker, logoutAsWorker,
      isActivated, activate, deActivate,
      weeks, addWeeks, updateWeeks,
      clients,
      saveClients,
      employees,
      saveEmployees,
      adminWeeks, changeAdminWeek, addAdminWeek,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
