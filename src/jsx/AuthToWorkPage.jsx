import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/authpanel.css'

const AuthToWorkPage = ({onButtonClick}) => {

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
                        <div className="auth-button">
                            <Link to="/work">
                                <button className="login-button">Начать смену</button>
                            </Link>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default AuthToWorkPage;