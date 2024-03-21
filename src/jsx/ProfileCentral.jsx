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
                {/* Передаем ссылку на функцию, чтобы она вызывалась только при клике */}
                <div onClick={() => handleChangeContent(false)} className="profile-central-title">
                    График
                </div>
                <div onClick={() => handleChangeContent(true)} className="profile-central-title">
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
