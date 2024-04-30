// В ProfilePage.js
import React, { useContext, useEffect, useState } from "react";
import ProfileLeft from "./ProfileLeft";
import ProfileCentral from "./ProfileCentral";
import "../css/profile_page.css";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [notifications, setNotifications] = useState([]);
    const { isAdmin, isEmploye, isWorker } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAdmin && !isWorker && !isEmploye) {
            navigate("/");
        } else if (isWorker) {
            navigate("/work");
        } else if (isAdmin) {
            navigate("/admin");
        }
    }, [isAdmin, isWorker, isEmploye, navigate]);

    const handleSaveNotification = (data) => {
        // Добавляем новое уведомление в начало списка
        setNotifications([data, ...notifications]);
        console.log("set notification " + data.text)
    };

    return (
        <>
            {isEmploye &&
                <div className="profile-wrapper">
                    <ProfileLeft name="Челов Чел Челиков" position="бариста" notification={notifications[0]} previousNotifications={notifications.slice(1)} />
                    <ProfileCentral name="Челов Чел Челиков" onSave={handleSaveNotification}></ProfileCentral>
                </div>
            }
        </>


    );
};

export default ProfilePage;
