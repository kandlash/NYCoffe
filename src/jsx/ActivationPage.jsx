import React from "react";
import { Link } from "react-router-dom";

const ActivationPage = ({onButtonClick}) => {

    const handleClick = () =>{
        onButtonClick();
    }

    return (
        <div className="activation-work-wrapper">
            <div className="activation-panel">
                <div className="auth-current-panel-title-container">
                    <div className="auth-current-panel-title">
                        NYCOFFEE
                    </div>
                </div>
                    <div className="activation-wrapper">
                        <div className="activation-input">
                            <input type="password" placeholder="Введите ключ активации" />
                        </div>
                        <div className="activation-button-containet">
                            <Link to="/authtowork">
                                <button className="activation-button">Активировать</button>
                            </Link>
                        </div>
                        <Link to="/auth" className="without-activation-link">
                            Продолжить без активации
                        </Link>
                    </div>

            </div>
        </div>
    )
}

export default ActivationPage;