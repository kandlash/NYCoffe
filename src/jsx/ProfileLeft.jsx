import React from "react";
import ProfileLeftHistory from "./ProfileLeftHistory";
import ProfileLeftPersonal from "./ProfileLeftPersonal";
import "../css/profile-left.css"

const ProfileLeft = () =>{
    return(
        <div className="profile-left-wrapper">
            <ProfileLeftPersonal />
            <ProfileLeftHistory />
        </div>
    )
}

export default ProfileLeft;