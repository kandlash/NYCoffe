import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/authpanel.css'
import AuthContext from "./AuthContext";

const AuthToWorkPage = () => {
    const { loginAsWorker, deActivate, isActivated, isAdmin, isWorker, isEmploye, employees } = useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [isCorrectInput, setIsCorrectInput] = useState(true);

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

    useEffect(() => {
        if (isCorrect) {
            navigate("/work");
        }
    }, [isCorrect, navigate]);

    const handleLoginAsWorker = () => {
        const employee = employees.find(
            (employee) => employee.email === email && employee.password === password
        );

        if (employee) {
            loginAsWorker();
            setIsCorrect(true);
            setIsCorrectInput(true);
        } else {
            console.log("not correct!");
            setIsCorrectInput(false);
            // здесь вы можете добавить логику для отображения сообщения об ошибке
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
        </div>
    )
}

export default AuthToWorkPage;
