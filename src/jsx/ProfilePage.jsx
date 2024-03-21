import React from "react";
import ProfileLeft from "./ProfileLeft";
import ProfileCentral from "./ProfileCentral";
import "../css/profile_page.css"

const ProfilePage = () => {
    return(
        <div className="profile-wrapper">
            <ProfileLeft></ProfileLeft>
            <ProfileCentral></ProfileCentral>
        </div>
    )
}

export default ProfilePage;