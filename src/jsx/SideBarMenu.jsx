import React from "react";
import '../css/sidebar_menu.css'
import people_icon from '../images/people_icon.svg';
import profile_icon from '../images/profile_icon.svg';
import card_icon from '../images/card_icon.svg';
import coffee_icon from '../images/coffee_icon.svg';

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
                    <img className="sbm-element-icon" alt="people_icon" src={profile_icon}></img>
                        <p>Профиль</p>
                    </div>
                    <div className="sbm-element">
                        <img className="sbm-element-icon" alt="people_icon" src={people_icon}></img>
                        <p>Заказы</p>
                    </div>
                    <div className="sbm-element">
                    <img className="sbm-element-icon" alt="people_icon" src={coffee_icon}></img>
                        <p>База заказов</p>
                    </div>
                    <div className="sbm-element">
                    <img className="sbm-element-icon" alt="people_icon" src={card_icon}></img>
                        <p>База карт лояльности</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SideBarMenu;