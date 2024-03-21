import React, { useState } from "react";
import ScheduleFilling from "./ScheduleFilling";
import SheduleWatch from "./SheduleWatch";

const ProfileCentral = () =>{
    const [isShedule, setShedule] = useState(true);
    return(
        <div className="profile-central-wrapper">
            <div className="profile-central-title-container">
                <div className="profile-central-title">
                    График
                </div>
                <div className="profile-central-title">
                    Заполнение графика
                </div>
            </div>
            <div className="profile-central-main-container">
                {isShedule && <ScheduleFilling/>}
                {isShedule === false && <SheduleWatch/>}
            </div>
        </div>
    )
}

export default ProfileCentral;