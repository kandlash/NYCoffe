import React, { useState } from "react";
import '../css/authpanel.css'
const AuthPanel = () => {
    const [isRegistration, setIsRegistration] = useState(true);
    return (
        <div className="AuthPanelWrapper">
            <div className="authbackground"></div>
            <div className="auth-panel">
                <div className="auth-current-panel-title-container">
                    <div className={"auth-current-panel-title" + (!isRegistration ? " selected" : "")}>
                        Авторизация
                    </div>
                    <div className={"auth-current-panel-title" + (isRegistration ? " selected" : "")}>
                        Регистрация
                    </div>
                </div>
                {isRegistration ? (
                    <div className="reg-wrapper">
                        <div className="reg-input">
                            <input type="text" placeholder="Имя" />
                        </div>
                        <div className="reg-input">
                            <input type="text" placeholder="Фамилия" />
                        </div>
                        <div className="reg-input">
                            <input type="text" placeholder="Отчество" />
                        </div>
                        <div className="reg-input">
                            <select>
                                <option value="employee">Сотрудник</option>
                                <option value="admin">Администратор</option>
                            </select>
                        </div>
                        <div className="reg-input">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="reg-input">
                            <input type="password" placeholder="Пароль" />
                        </div>
                        <div className="reg-input">
                            <input type="password" placeholder="Подтвердить пароль" />
                        </div>
                        <div className="reg-button">
                            <button>Создать аккаунт</button>
                        </div>
                    </div>

                ) : (
                    <div className="auth-wrapper">
                        <div className="auth-input">
                            <input type="text" placeholder="Номер телефона или Email" />
                        </div>
                        <div className="auth-input">
                            <input type="password" placeholder="Пароль" />
                        </div>
                        <div className="auth-button">
                            <button>Войти</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AuthPanel;