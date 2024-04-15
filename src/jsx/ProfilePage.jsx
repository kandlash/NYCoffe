// В ProfilePage.js
import React, { useState } from "react";
import ProfileLeft from "./ProfileLeft";
import ProfileCentral from "./ProfileCentral";
import "../css/profile_page.css";

const ProfilePage = () => {
    const [notifications, setNotifications] = useState([]);

    const handleSaveNotification = (data) => {
        // Добавляем новое уведомление в начало списка
        setNotifications([data, ...notifications]);
        console.log("set notification " + data.text)
    };

    return(
        <div className="profile-wrapper">
            <ProfileLeft name="Челов Чел Челиков" position="бариста" notification={notifications[0]} previousNotifications={notifications.slice(1)} />
            <ProfileCentral onSave={handleSaveNotification}></ProfileCentral>
        </div>
    );
};

export default ProfilePage;
