import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import '../css/authpanel.css'
import { toast } from 'react-toastify';
import AuthContext from "./AuthContext";
import icon_man from "../images/icon_man.svg"
import email_icon from "../images/email_icon.svg"
import password_icon from "../images/password_icon.svg"

const Registration = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const {employees, saveEmployees} = useContext(AuthContext);

  const handleInputChange = () => {
    if (lastName && firstName && middleName && phone && email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const addEmploye = () =>{
    const newEmployee = {
      lastName,
      firstName,
      middleName,
      phone,
      email,
      password
    };
  
    const updatedEmployees = [...employees, newEmployee];
    saveEmployees(updatedEmployees);
  
    toast.success(`Добавлен сотрудник ${lastName} ${firstName} ${middleName}`, {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  

  return (
    <div className="RegPanelWrapper">
      <div className="reg-panel">
        <div className="auth-current-panel-title-container">
          <div className="auth-current-panel-title">
            Регистрация
          </div>
        </div>
        <div className="reg-wrapper">
          <div className="reg-input">
            <img className="icon_reg" src={icon_man} alt="man"></img>
            <input onChange={(e) => {setLastName(e.target.value); handleInputChange();}} type="text" placeholder="Фамилия" />
          </div>
          <div className="reg-input">
            <input onChange={(e) => {setFirstName(e.target.value); handleInputChange();}} type="text" placeholder="Имя" />
          </div>
          <div className="reg-input">
            <input onChange={(e) => {setMiddleName(e.target.value); handleInputChange();}} type="text" placeholder="Отчество" />
          </div>
          <div className="reg-input">
            <input onChange={(e) => {setPhone(e.target.value); handleInputChange();}} type="phone" placeholder="Номер телефона" />
          </div>
          <div className="reg-input">
            <img className="icon_reg" src={email_icon} alt="email_icon"></img>
            <input onChange={(e) => {setEmail(e.target.value); handleInputChange();}} type="text" placeholder="Email-адрес" />
          </div>
          <div className="reg-input">
          <img className="icon_reg" src={password_icon} alt="password_icon"></img>
            <input onChange={(e) => {setPassword(e.target.value); handleInputChange();}} type="password" placeholder="Пароль" />
          </div>
          <div className="auth-button admin">
            <button disabled={isButtonDisabled} onClick={addEmploye} className="login-button">Создать аккаунт</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Registration;
