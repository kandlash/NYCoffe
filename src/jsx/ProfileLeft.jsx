import React from "react";
import ProfileLeftHistory from "./ProfileLeftHistory";
import ProfileLeftPersonal from "./ProfileLeftPersonal";
import "../css/profile-left.css"

const ProfileLeft = (props) =>{
    return(
        <div className="profile-left-wrapper">
            <ProfileLeftPersonal name={props.name} position={props.position}/>
            <ProfileLeftHistory />
        </div>
    )
}

export default ProfileLeft;