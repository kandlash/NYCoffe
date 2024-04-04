import React from "react";
import profileImg from '../images/profile-test.jpg';
import logout_icon from "../images/logout_icon.svg";
import "../css/profile-personal.css"
import { Link } from "react-router-dom";

const ProfileLeftPersonal = (props) =>{
    return(
        <div className="profile-personal-container">
            <Link to="/"><img className="logout-icon-img" src={logout_icon} alt="logout" /></Link>
            <div className="profile-img-container">
                <img className="profile-img" src={profileImg} alt="profile-img"></img>
            </div>
            <div className="profile-personal-name">
                {props.name}
            </div>
            <div className="profile-personal-position">
                {props.position}
            </div>
        </div>
    )
}

export default ProfileLeftPersonal;