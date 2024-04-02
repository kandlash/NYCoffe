import React from "react";
import { Link } from "react-router-dom";
import "../css/activation_page.css"
import key_icon from "..//images/key_icon.svg"

const ActivationPage = ({ onButtonClick }) => {

    // const handleClick = () => {
    //     onButtonClick();
    // }

    return (
        <div className="activation-work-wrapper">
            <div className="activation-panel">
                <div className="activation-panel-title">
                    NYCOFFEE
                </div>
                <div className="activation-input-container">
                    <img alt="key_icon" className="activation-input-key-icon" src={key_icon}/>
                    <div className="activation-input">
                        <input type="password" placeholder="Введите ключ активации" />
                    </div>
                </div>
                <div className="activation-activate-or-skip-container">
                    <div className="activation-button-container">
                        <Link to="/authtowork">
                            <button className="activation-button">Активировать</button>
                        </Link>
                    </div>
                    <div className="activation-skip">
                        <Link to="/auth" className="without-activation-link">
                            Продолжить без активации
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ActivationPage;