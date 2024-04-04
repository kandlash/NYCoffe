import React from "react";
import ProfileLeft from "./ProfileLeft";
import WorkNavigation from "./WorkNavigation";

const AdminPage = () => {
    return(
        <div className="admin-page-wrapper">
            <WorkNavigation isAdmin={true}></WorkNavigation>
            <div className="admin-page-elements-container">                
                <ProfileLeft name="Анатольев Анатолий Анатольевич" position="Админ"></ProfileLeft>

            </div>
        </div>
    )
}

export default AdminPage;