import React from "react";
import profileImg from '../images/profile-test.jpg';
import "../css/profile-personal.css"

const ProfileLeftPersonal = () =>{
    return(
        <div className="profile-personal-container">
            <div className="profile-img-container">
                <img className="profile-img" src={profileImg} alt="profile-img"></img>
            </div>
            <div className="profile-personal-name">
                Кириллов Кирилл Кириллович
            </div>
            <div className="profile-personal-position">
                бариста 
            </div>
        </div>
    )
}

export default ProfileLeftPersonal;