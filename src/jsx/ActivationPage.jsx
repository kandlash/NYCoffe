import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/activation_page.css"
import key_icon from "..//images/key_icon.svg"
import AuthContext from "./AuthContext";

const ActivationPage = ({ onButtonClick }) => {

    const { isAdmin, isEmploye, isWorker, isActivated, activate } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isCorrect, setIsCorrect] = useState(false);
    const [isCorrectCode, setIsCorrectCode] = useState(true);

    useEffect(() => {
        if (isAdmin) {
            navigate("/admin");
        } else if (isWorker) {
            navigate("/work");
        } else if (isEmploye) {
            navigate("/profile");
        }
        else if (isActivated) {
            navigate("/authtowork");
        }
    }, [isAdmin, isWorker, isEmploye, navigate]);

    const activateClick = () => {
        if (isCorrect) {
            activate();
            setIsCorrectCode(true);
        }
        else {
            setIsCorrectCode(false);
        }
    }

    const handlePasswordChange = (e) => {
        if (e.target.value === "testcode") {
            setIsCorrect(true);
            setIsCorrectCode(true);
        }
        else {
            setIsCorrect(false);
            setIsCorrectCode(true);
        }
    }

    return (
        <>
            {!isAdmin && !isEmploye && !isWorker && !isActivated &&
                <>
                    <div className="activation-work-wrapper">
                        <div className="activation-panel">
                            <div className="activation-panel-title">
                                NYCOFFEE
                            </div>
                            <div className="activation-input-container">
                                <img alt="key_icon" className="activation-input-key-icon" src={key_icon} />
                                <div className={`activation-input ${isCorrectCode ? "" : "not-activation-input"}`}>
                                    <input onChange={handlePasswordChange} type="password" placeholder="Введите ключ активации" />
                                </div>
                            </div>
                            <div className="not-correct-activation-text-container">
                                {!isCorrectCode && <p>Не верный код активации</p>}
                            </div>
                            <div className="activation-activate-or-skip-container">
                                <div className="activation-button-container">
                                    {isCorrect ? (
                                        <Link onClick={activateClick} to="/authtowork">
                                            <button className="activation-button">Активировать</button>
                                        </Link>
                                    ) : (
                                        <button onClick={activateClick} className="activation-button">Активировать</button>
                                    )}

                                </div>
                                <div className="activation-skip">
                                    <Link to="/auth" className="without-activation-link">
                                        Продолжить без активации
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            }
        </>

    )
}

export default ActivationPage;