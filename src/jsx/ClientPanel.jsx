// Ваш обновленный ClientPanel.jsx
import React from "react";
import '../css/client.css'


const ClientPanel = (props) => {
    const handleExit = () => {
        props.onExit(); // Вызываем функцию-обработчик для обработки ухода клиента
    };

    const handleRemove = () => {
        props.onRemove(); // Вызываем функцию-обработчик для обработки удаления клиента
    };

    return (
        <div className="client-container">
            <div className="name-container">{props.name}</div>
            <div className="arrival-time-container">{props.arrival_time}</div>
            {!props.isExit ? (
                <div>
                    <button onClick={handleExit}>Ушел</button>
                    
                </div>
            ) : (
                <>
                    <div className="exit-time-container">{props.exit_time}</div>
                </>

            )}
            <button onClick={handleRemove}>Удалить</button>
        </div>
    );
};

export default ClientPanel;
