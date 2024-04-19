import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../css/authpanel.css'
import AuthContext from "./AuthContext";

const AuthToWorkPage = ({onButtonClick}) => {

    const {loginAsWorker} = useContext(AuthContext);
    const handleClick = () =>{
        onButtonClick();
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
                            <input className="auth-input-in" type="text" placeholder="Номер телефона или Email" />
                        </div>
                        <div className="auth-input">
                            <input className="auth-input-in" type="password" placeholder="Пароль" />
                        </div>
                        <div className="auth-button">
                            <Link onClick={loginAsWorker} to="/work">
                                <button className="login-button">Начать смену</button>
                            </Link>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default AuthToWorkPage;