import React, { useContext } from "react";
import { useState } from "react";
import ProfileLeft from "./ProfileLeft";
import WorkNavigation from "./WorkNavigation";
import "../css/admin_page.css"
import AdminSheduleFilling from "./AdminSheduleFilling";
import AuthContext from "./AuthContext";
import { Link } from "react-router-dom";

const AdminPage = () => {
    const [notifications, setNotifications] = useState([]);
    const { isAdmin, isEmploye, isWorker } = useContext(AuthContext);

    const handleSaveNotification = (data) => {
        // Добавляем новое уведомление в начало списка
        setNotifications([data, ...notifications]);
        console.log("set notification " + data.text)
    };
    let message = "";
    if (!isAdmin && !isWorker && !isEmploye) {
        message = (
            <>
                Кажется вы не вошли в систему! <Link to="/">На главную</Link>
            </>
        );
    } else if (!isAdmin && isWorker) {
        message = (
            <>
                Работай, а не по ссылкам лазий! <Link to="/work">Работать</Link>
            </>
        );
    } else if (isEmploye && !isAdmin) {
        message = (
            <>
                Ты можешь смотреть страницу админа, только свой профиль <Link to="/profile">Профиль</Link>
            </>
        );
    }

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
                <div className="not-admin-page">
                    {message}
                </div>
            )}
        </>
    )
}

export default AdminPage;