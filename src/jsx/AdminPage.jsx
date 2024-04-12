import React from "react";
import ProfileLeft from "./ProfileLeft";
import WorkNavigation from "./WorkNavigation";
import AdminShifts from "./AdminShifts";
import "../css/admin_page.css"

const AdminPage = () => {
    return(
        <div className="admin-page-wrapper">
            <WorkNavigation border="noborder" name="Главная" isAdmin={true}></WorkNavigation>
            <div className="admin-page-elements-container">                
                <ProfileLeft name="Анатольев Анатолий Анатольевич" position="Админ"></ProfileLeft>
                <AdminShifts></AdminShifts>
            </div>
        </div>
    )
}

export default AdminPage;