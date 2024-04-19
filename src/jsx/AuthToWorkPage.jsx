import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/authpanel.css'
import AuthContext from "./AuthContext";

const AuthToWorkPage = () => {

    const {loginAsWorker, deActivate, isActivated, isAdmin, isWorker, isEmploye} = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (isAdmin) {
            navigate("/admin");
        } else if (isWorker) {
            navigate("/work");
        } else if (isEmploye) {
            navigate("/profile");
        }
        else if(!isActivated){
            navigate("/");
        }
    }, [isActivated, isAdmin, isWorker, isEmploye, navigate]);

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
                        <div className="auth-button-container-">
                            <Link onClick={loginAsWorker} to="/work">
                                <button className="login-button">Начать смену</button>
                            </Link>
                            <button onClick={deActivate} className="login-button">Деактивировать</button>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default AuthToWorkPage;