import React from "react";
import WorkNavigation from "./WorkNavigation";
import { useLocation } from "react-router-dom";
import Registration from "./Registration";

const RegistrationPage = () => {
    const location = useLocation();
    const isAdmin = location.state?.isAdmin || false;
    return(
        <>
            <WorkNavigation name="Регистрация" isAdmin={isAdmin}></WorkNavigation>
            <Registration></Registration>
        </>
    )
}

export default RegistrationPage;