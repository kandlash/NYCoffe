import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import '../css/authpanel.css'

const Registration = () => {

    return (
        <div className="AuthPanelWrapper">
            <div className="auth-panel">
                <div className="auth-current-panel-title-container">
                    <div className="auth-current-panel-title">
                        Регистрация
                    </div>
                </div>
                <div className="auth-wrapper">
                    <div className="reg-input">
                        <input  type="text" placeholder="Номер телефона или Email" />
                    </div>
                    <div className="reg-input">
                        <input  type="password" placeholder="Пароль" />
                    </div>
                    <div className="auth-button admin">
                        <button className="login-button">Зарегестрировать</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Registration;
