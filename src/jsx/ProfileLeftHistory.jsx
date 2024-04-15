// В ProfileLeftHistory.js
import React from "react";

const ProfileLeftHistory = (props) => {
    // Распаковываем текущее уведомление и список предыдущих уведомлений из props
    const { currentNotification, previousNotifications } = props;

    return(
        <div className="profile-left-history-wrapper">
            {/* Отображаем текущее уведомление */}
            {currentNotification && (
                <div className="profile-left-history-element">
                    <div className="notification-text">{currentNotification.text}</div>
                    <div className="notification-text">{currentNotification.date}</div>
                </div>
            )}

            {/* Отображаем предыдущие уведомления */}
            {previousNotifications.map((notification, index) => (
                <div key={index} className="profile-left-history-element">
                    <div className="notification-text">{notification.text}</div>
                    <div className="notification-text">{notification.date}</div>
                </div>
            ))}
        </div>
    );
};

export default ProfileLeftHistory;
