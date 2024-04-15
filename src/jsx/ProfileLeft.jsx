// В ProfileLeft.js
import React from "react";
import ProfileLeftHistory from "./ProfileLeftHistory";
import ProfileLeftPersonal from "./ProfileLeftPersonal";
import "../css/profile-left.css"

const ProfileLeft = (props) =>{
    return(
        <div className="profile-left-wrapper">
            <ProfileLeftPersonal name={props.name} position={props.position}/>
            {/* Передаём текущее уведомление и список предыдущих уведомлений */}
            <ProfileLeftHistory currentNotification={props.notification} previousNotifications={props.previousNotifications} />
            {console.log("profile left " + props.notification)}
        </div>
    )
}

export default ProfileLeft;
