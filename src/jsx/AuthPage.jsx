import React, { useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import '../css/authpanel.css'
import AuthContext from "./AuthContext";

const AuthPage = ({onButtonClick}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdminEmail, setIsAdminEmail] = useState(false);
    const [isAdminPassword, setIsAdminPassword] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const { login } = useContext(AuthContext);

    const handleClick = () =>{
        console.log("set isAdmin");
        login();
    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
        if(e.target.value === "admin"){
            setIsAdminEmail(true);
        }
        else{
            setIsAdminEmail(false);
        }
        console.log(isAdminEmail + " pin " + isAdminPassword);
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
        if(e.target.value === "admin"){
            setIsAdminPassword(true);
        }
        else{
            setIsAdminPassword(false);
        }
        console.log(isAdminEmail + " pon " + isAdminPassword);
    }

    useEffect( () =>{
        if(isAdminEmail && isAdminPassword){
            setIsAdmin(true);
            console.log(isAdminEmail + " " + isAdminPassword);
        }
        else{
            setIsAdmin(false);
        }
    },[isAdminEmail, isAdminPassword])

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
                            <input value={email} onChange={handleEmailChange} type="text" placeholder="Номер телефона или Email" />
                        </div>
                        <div className="auth-input">
                            <input value={password} onChange={handlePasswordChange} type="password" placeholder="Пароль" />
                        </div>

                        {isAdmin ? (
                            <Link onClick={handleClick} to="/admin">
                                <div className="auth-button admin">
                                    <button  className="login-button">Войти</button>
                                </div>
                            </Link>
                        )
                        :
                        (
                            <Link to="/profile">
                                <div className="auth-button nonadmin">
                                    <button className="login-button">Войти</button>
                                </div>
                            </Link>
                        )}
                    </div>

            </div>
        </div>
    )
}

export default AuthPage;
