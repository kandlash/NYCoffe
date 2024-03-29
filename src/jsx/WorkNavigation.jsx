import React, { useState } from "react";
import WorkSideBarMenu from "./WorkSideBarMenu";

const WorkNavigation = (props) => {
    const [sideBarMenuOpen, setSideBarMenuOpen] = useState(false);

    const handleClose = () =>{
        setSideBarMenuOpen(false);
    }

    return (
        <>
            <div className={`navigation-panel ${props.border ? 'noborder' : ''}`}>
                <div className="nav-elements-wrapper">
                    <div className="menu-button-container">
                        <button onClick={() => setSideBarMenuOpen(true)} className="menu-button">≡</button>
                    </div>
                    <div className="panel-name">
                        {props.name}
                    </div>
                </div>
            </div>
            {sideBarMenuOpen && <WorkSideBarMenu onCloseClick={handleClose}/>}
        </>
    )
}

export default WorkNavigation;