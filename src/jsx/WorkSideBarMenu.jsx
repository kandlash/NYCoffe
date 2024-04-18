import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../css/sidebar_menu.css'
import people_icon from '../images/people_icon.svg';
import profile_icon from "../images/profilemale_icon.svg";
import add_employe from "../images/add_employe_icon.svg";
import card_icon from '../images/card_icon.svg';
import coffee_icon from '../images/coffee_icon.svg';
import AuthContext from "./AuthContext";

const WorkSideBarMenu = ({ onCloseClick }) => {
    const { isAdmin } = useContext(AuthContext);
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
                    {isAdmin ?
                        (
                            <>
                                <Link to="/admin">
                                    <div className="sbm-element">
                                        <img className="sbm-element-icon" alt="people_icon" src={profile_icon}></img>
                                        <p>Главная</p>
                                    </div>
                                </Link>
                                <Link to={{
                                    pathname: "/reg",
                                    state: { isAdmin: isAdmin }
                                }}>
                                    <div className="sbm-element">
                                        <img className="sbm-element-icon" alt="people_icon" src={add_employe}></img>
                                        <p>Добавить сотрудника</p>
                                    </div>
                                </Link>
                                <Link to={{
                                    pathname: "/orders",
                                    state: { isAdmin: isAdmin }
                                }}>
                                    <div className="sbm-element">
                                        <img className="sbm-element-icon" alt="people_icon" src={coffee_icon}></img>
                                        <p>База заказов</p>
                                    </div>
                                </Link>
                                <Link to={{
                                    pathname: "/loyaltycards",
                                    state: { isAdmin: isAdmin }
                                }}>
                                    <div className="sbm-element">
                                        <img className="sbm-element-icon" alt="people_icon" src={card_icon}></img>
                                        <p>База карт лояльности</p>
                                    </div>
                                </Link>
                            </>
                        )
                        :
                        (
                            <>
                                <Link to="/work">
                                    <div className="sbm-element">
                                        <img className="sbm-element-icon" alt="people_icon" src={people_icon}></img>
                                        <p>Заказы</p>
                                    </div>
                                </Link>
                                <Link to="/orders">
                                    <div className="sbm-element">
                                        <img className="sbm-element-icon" alt="people_icon" src={coffee_icon}></img>
                                        <p>База заказов</p>
                                    </div>
                                </Link>
                                <Link to="/loyaltycards">
                                    <div className="sbm-element">
                                        <img className="sbm-element-icon" alt="people_icon" src={card_icon}></img>
                                        <p>База карт лояльности</p>
                                    </div>
                                </Link>
                                <div className="end-shift-container">
                                    <Link to="/authtowork">
                                        <button className="end-shift-button">
                                            Закончить смену
                                        </button>
                                    </Link>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>

    )
}

export default WorkSideBarMenu;