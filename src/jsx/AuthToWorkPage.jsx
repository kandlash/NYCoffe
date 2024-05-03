import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/authpanel.css'
import AuthContext from "./AuthContext";
import Modal from 'react-modal';

const AuthToWorkPage = () => {
  const { loginAsWorker, deActivate, isActivated, isAdmin, isWorker, isEmploye, employees } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isCorrectInput, setIsCorrectInput] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeeName, setEmployeeName] = useState("");

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin");
    } else if (isWorker) {
      navigate("/work");
    } else if (isEmploye) {
      navigate("/profile");
    } else if (!isActivated) {
      navigate("/");
    }
  }, [isActivated, isAdmin, isWorker, isEmploye, navigate]);

  const handleLoginAsWorker = () => {
    const employee = employees.find(
      (employee) => employee.email === email && employee.password === password
    );

    if (employee) {
        console.log(employee)
      setIsModalOpen(true);
      setIsCorrectInput(true);
     
      setEmployeeName(employee.lastName + " " + employee.firstName + " " + employee.middleName)
    } else {
      console.log("not correct!");
      setIsCorrectInput(false);
    }
  }

  const handleEmailChange = () =>{
    setIsCorrectInput(true);
  }

  const handlePasswordChange = () =>{
    setIsCorrectInput(true);
  }

  return (
    <div className="AuthPanelWrapper">
      <div className="auth-panel">
        <div className="auth-current-panel-title-container">
          <div className="auth-current-panel-title">
            Авторизация
          </div>
        </div>
        <div className="auth-wrapper">
          <div className="auth-input">
            <input className={`auth-input-in ${isCorrectInput ? '' : 'not-correct-input'}`} value={email} onChange={(e) => { setEmail(e.target.value); handleEmailChange(); }} type="text" placeholder="Номер телефона или Email" />
          </div>
          <div className="auth-input">
            <input className={`auth-input-in ${isCorrectInput ? '' : 'not-correct-input'}`} value={password} onChange={(e) => { setPassword(e.target.value); handlePasswordChange(); }} type="password" placeholder="Пароль" />
          </div>
          {!isCorrectInput &&
            <div className="not-correct-auth-text">
              Не верный логин или пароль. Попробуйте еще раз.
            </div>
          }
          <div className="auth-button-container-">
            <button onClick={handleLoginAsWorker} className="login-button">Начать смену</button>
            <button onClick={deActivate} className="login-button">Деактивировать</button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <div className="modal-container">
          <div className="modal-title">Подтверждение начала смены</div>
          <div className="modal-body">
            <div className="modal-text">{`${employeeName} Вы точно собираетесь начать смену?`}</div>
            <div className="modal-buttons">
              <Link to="/work"><button onClick={loginAsWorker} className="modal-button">Да</button></Link>
              <button onClick={() => setIsModalOpen(false)} className="modal-button">Нет</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default AuthToWorkPage;
