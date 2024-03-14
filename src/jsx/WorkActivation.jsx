import React from "react";

const WorkActivation = ({onButtonClick}) => {

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
                            <button onClick={handleClick} className="activation-button">Активировать</button>
                        </div>
                        <div className="without-activation-link">
                            Продолжить без активации
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default WorkActivation;