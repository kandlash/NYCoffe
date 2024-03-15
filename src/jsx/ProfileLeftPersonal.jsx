import React from "react";
import profileImg from '../images/profile-test.jpg';

const ProfileLeftPersonal = () =>{
    return(
        <div className="profile-personal-container">
            <div className="profile-img-container">
                <img width="50px" height="50px" src={profileImg} alt="profile-img"></img>
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