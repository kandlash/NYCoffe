import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/authpanel.css'

const AuthPage = ({onButtonClick}) => {

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
                            <input type="text" placeholder="Номер телефона или Email" />
                        </div>
                        <div className="auth-input">
                            <input type="password" placeholder="Пароль" />
                        </div>
                        <Link to="/profile">
                            <div className="auth-button">
                                <button className="login-button">Войти</button>
                            </div>
                        </Link>

                    </div>

            </div>
        </div>
    )
}

export default AuthPage;