import React from "react";
import '../css/sidebar_menu.css'

const SideBarMenu = ({ onCloseClick }) => {

    const handleClick = () => {
        onCloseClick();
    }

    return (
        <div className="smb-background">
            <div className="sidebarmenu-wrapper">
                <div className="sidebarmenu-elements">
                    <div className="smb-element">
                        <button onClick={handleClick} className="smb-close-button">
                            X
                        </button>
                    </div>
                    <div className="sbm-element">
                        Профиль
                    </div>
                    <div className="sbm-element">
                        Заказы
                    </div>
                    <div className="sbm-element">
                        База заказов
                    </div>
                    <div className="sbm-element">
                        База карт лояльности
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SideBarMenu;