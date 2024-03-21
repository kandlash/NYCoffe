import React from "react";
import ProfileLeft from "./ProfileLeft";
import ProfileCentral from "./ProfileCentral";

const ProfilePage = () => {
    return(
        <div className="profile-wrapper">
            <ProfileLeft></ProfileLeft>
            <ProfileCentral></ProfileCentral>
        </div>
    )
}

export default ProfilePage;