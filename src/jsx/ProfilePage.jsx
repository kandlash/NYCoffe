// В ProfilePage.js
import React, { useState } from "react";
import ProfileLeft from "./ProfileLeft";
import ProfileCentral from "./ProfileCentral";
import "../css/profile_page.css";

const ProfilePage = () => {
    const [notification, setNotification] = useState(null);

    const handleSaveNotification = (data) => {
        setNotification(data);
        console.log("set notification " + data.text)
    };

    return(
        <div className="profile-wrapper">
            <ProfileLeft name="Челов Чел Челиков" position="бариста" notification={notification}></ProfileLeft>
            <ProfileCentral onSave={handleSaveNotification}></ProfileCentral>
        </div>
    );
};

export default ProfilePage;
