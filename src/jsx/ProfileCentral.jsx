import React, { useState } from "react";
import ScheduleFilling from "./ScheduleFilling";
import SheduleWatch from "./SheduleWatch";
import "../css/profile-central.css";

const ProfileCentral = () => {
    const [isShedule, setShedule] = useState(true);

    const handleChangeContent = (flag) => {
        if (flag) {
            setShedule(true);
        } else {
            setShedule(false);
        }
    }

    return (
        <div className="profile-central-wrapper">
            <div className="profile-central-title-container">
                <div onClick={() => handleChangeContent(false)} className={`profile-central-title ${isShedule ? '' : 'selected'}`}>
                    График
                </div>
                <div onClick={() => handleChangeContent(true)} className={`profile-central-title ${isShedule ? 'selected' : ''}`}>
                    Заполнение графика
                </div>
            </div>
            <div className="profile-central-main-container">
                {isShedule && <ScheduleFilling />}
                {!isShedule && <SheduleWatch />}
            </div>
        </div>
    )
}

export default ProfileCentral;
