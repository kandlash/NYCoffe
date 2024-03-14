import React, { useState } from "react";
import SideBarMenu from "./SideBarMenu";

const Navigation = (props) => {
    const [sideBarMenuOpen, setSideBarMenuOpen] = useState(false);

    const handleClose = () =>{
        setSideBarMenuOpen(false);
    }

    return (
        <>
            <div className="navigation-panel">
                <div className="nav-elements-wrapper">
                    <div className="menu-button-container">
                        <button onClick={() => setSideBarMenuOpen(true)} className="menu-button">≡</button>
                    </div>
                    <div className="panel-name">
                        {props.name}
                    </div>
                </div>
            </div>
            {sideBarMenuOpen && <SideBarMenu onCloseClick={handleClose}/>}
        </>
    )
}

export default Navigation;