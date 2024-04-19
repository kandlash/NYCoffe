import React, { useContext, useEffect } from "react";
import { useState } from "react";
import ProfileLeft from "./ProfileLeft";
import WorkNavigation from "./WorkNavigation";
import "../css/admin_page.css"
import AdminSheduleFilling from "./AdminSheduleFilling";
import AuthContext from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const AdminPage = () => {
    const [notifications, setNotifications] = useState([]);
    const { isAdmin, isEmploye, isWorker } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAdmin && !isWorker && !isEmploye) {
            navigate("/");
        } else if (isEmploye) {
            navigate("/profile");
        } else if (isWorker) {
            navigate("/work");
        }
    }, [isAdmin, isWorker, isEmploye, navigate]);

    const handleSaveNotification = (data) => {
        // Добавляем новое уведомление в начало списка
        setNotifications([data, ...notifications]);
        console.log("set notification " + data.text)
    };
    

    return (
        <>
            {isAdmin ? (
                <div className="admin-page-wrapper">
                    <WorkNavigation border="noborder" name="Главная" isAdmin={true}></WorkNavigation>
                    <div className="admin-page-elements-container">
                        <ProfileLeft name="Анатольев Анатолий Анатольевич" position="Админ" notification={notifications[0]} previousNotifications={notifications.slice(1)}></ProfileLeft>
                        <AdminSheduleFilling onSave={handleSaveNotification}/>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default AdminPage;