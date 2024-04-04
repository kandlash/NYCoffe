import React, { useState } from "react";
import WorkSideBarMenu from "./WorkSideBarMenu";
import burger_menu_icon from "../images/burger_menu_icon.svg";

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
                        <button onClick={() => setSideBarMenuOpen(true)} className="menu-button">
                            <img src={burger_menu_icon} alt="menu"/>
                        </button>
                    </div>
                    <div className="panel-name">
                        {props.name}
                    </div>
                </div>
            </div>
            {console.log(props.isAdmin)}
            {sideBarMenuOpen && <WorkSideBarMenu isAdmin={props.isAdmin} onCloseClick={handleClose}/>}
        </>
    )
}

export default WorkNavigation;