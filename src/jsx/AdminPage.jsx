import React from "react";
import { useState } from "react";
import ProfileLeft from "./ProfileLeft";
import WorkNavigation from "./WorkNavigation";
import AdminShifts from "./AdminShifts";
import "../css/admin_page.css"
import AdminSheduleFilling from "./AdminSheduleFilling";

const AdminPage = () => {
    const [notifications, setNotifications] = useState([]);

    const handleSaveNotification = (data) => {
        // Добавляем новое уведомление в начало списка
        setNotifications([data, ...notifications]);
        console.log("set notification " + data.text)
    };
    return(
        <div className="admin-page-wrapper">
            <WorkNavigation border="noborder" name="Главная" isAdmin={true}></WorkNavigation>
            <div className="admin-page-elements-container">                
                <ProfileLeft name="Анатольев Анатолий Анатольевич" position="Админ" notification={notifications[0]} previousNotifications={notifications.slice(1)}></ProfileLeft>
                <AdminSheduleFilling onSave={handleSaveNotification}/>
            </div>
        </div>
    )
}

export default AdminPage;