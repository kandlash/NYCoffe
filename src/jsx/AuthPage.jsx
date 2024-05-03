import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/authpanel.css'
import AuthContext from "./AuthContext";

const AuthPage = ({ onButtonClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdminEmail, setIsAdminEmail] = useState(false);
    const [isAdminPassword, setIsAdminPassword] = useState(false);
    const [isEmployeEmail, setIsEmployeEmail] = useState(false);
    const [isEmployePassword, setIsEmployePassword] = useState(false);
    const [isEmploye2, setIsEmploye] = useState(false);
    const [isAdmin2, setIsAdmin] = useState(false);
    const { login, loginAsEmp } = useContext(AuthContext);
    const [isCorrect, setIsCorrect] = useState(true);

    const { isAdmin, isEmploye, isWorker, employees } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAdmin) {
            navigate("/admin");
        } else if (isWorker) {
            navigate("/work");
        } else if (isEmploye) {
            navigate("/profile");
        }
    }, [isAdmin, isWorker, isEmploye, navigate]);



    const handleClick = () => {
        const employee = employees.find(
          (employee) => employee.email === email && employee.password === password
        );
      
        if (employee) {
          localStorage.setItem("employeeName", `${employee.lastName} ${employee.firstName} ${employee.middleName}`);
          loginAsEmp();
          setIsCorrect(true);
        } else if (email === "admin" && password === "admin") {
          login();
          setIsCorrect(true);
        } else {
          console.log("not correct!");
          setIsCorrect(false);
        }
      }
      
      

    const handleEmailChange = (e) => {
        setIsCorrect(true);
        setEmail(e.target.value);
        if (e.target.value === "admin") {
            setIsAdminEmail(true);
        }
        else if (e.target.value === "test@mail.ru") {
            setIsEmployeEmail(true);
        }
        else {
            setIsEmployeEmail(false);
            setIsAdminEmail(false);
        }
    }

    const handlePasswordChange = (e) => {
        setIsCorrect(true);
        setPassword(e.target.value);
        if (e.target.value === "admin") {
            setIsAdminPassword(true);
        }
        else if (e.target.value === "testpass") {
            setIsEmployePassword(true);
        }
        else {
            setIsEmployePassword(false);
            setIsAdminPassword(false);
        }
    }

    useEffect(() => {
        if (isAdminEmail && isAdminPassword) {
            setIsAdmin(true);
        }
        else if (isEmployeEmail && isEmployePassword) {
            setIsEmploye(true);
        }
        else {
            setIsEmploye(false);
            setIsAdmin(false);
        }
    }, [isAdminEmail, isAdminPassword, isEmployeEmail, isEmployePassword])

    return (
        <>
            {!isAdmin && !isEmploye && !isWorker &&
                <>
                    <div className="AuthPanelWrapper">
                        <div className="auth-panel">
                            <div className="auth-current-panel-title-container">
                                <div className="auth-current-panel-title">
                                    Авторизация
                                </div>
                            </div>
                            <div className="auth-wrapper">
                                <div className="auth-input">
                                    <input className={`auth-input-in ${isCorrect ? '' : 'not-correct-input'}`} value={email} onChange={handleEmailChange} type="text" placeholder="Номер телефона или Email" />
                                </div>
                                <div className="auth-input">
                                    <input className={`auth-input-in ${isCorrect ? '' : 'not-correct-input'}`} value={password} onChange={handlePasswordChange} type="password" placeholder="Пароль" />
                                </div>

                                {!isCorrect && 
                                    <div className="not-correct-auth-text">
                                        Не верный логин или пароль. Попробуйте еще раз.
                                    </div>
                                }

                                {isAdmin2 &&
                                    <Link onClick={handleClick} to="/admin">
                                        <div className="auth-button admin">
                                            <button className="login-button">Войти</button>
                                        </div>
                                    </Link>
                                }
                                {isEmploye2 &&
                                    <Link onClick={handleClick} to="/profile">
                                        <div className="auth-button nonadmin">
                                            <button className="login-button">Войти</button>
                                        </div>
                                    </Link>}
                                {!isEmploye2 && !isAdmin2 &&
                                        <div onClick={handleClick} className="auth-button nonadmin">
                                            <button className="login-button">Войти</button>
                                        </div>
                                }
                            </div>

                        </div>
                    </div>
                </>
            }
        </>


    )
}

export default AuthPage;
