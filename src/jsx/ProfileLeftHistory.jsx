// В ProfileLeftHistory.js
import React from "react";

const ProfileLeftHistory = (props) => {
    // Проверяем, есть ли уведомление, и если есть, отображаем его текст
    const notificationText = props.notification ? props.notification.text : null;

    return(
        <div className="profile-left-history-wrapper">
            <div className="profile-left-history-element">
                {/* Отображаем текст уведомления */}
                {notificationText && <div className="notification-text">{notificationText}</div>}
            </div>
        </div>
    );
};

export default ProfileLeftHistory;
