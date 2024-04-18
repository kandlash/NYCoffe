import React from "react";
import {Routes, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import ActivationPage from "./ActivationPage";
import AuthPage from "./AuthPage";
import AuthToWorkPage from "./AuthToWorkPage";
import WorkPage from "./WorkPage";
import ProfilePage from "./ProfilePage";
import Orders from "./Orders";
import LoyaltyCards from "./LoyaltyCards";
import AdminPage from "./AdminPage";
import RegistrationPage from "./RegistrationPage";

const Application = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<ActivationPage/>}/>
                <Route path="/auth" element={<AuthPage/>}/>
                <Route path="/authtowork" element={<AuthToWorkPage/>}/>
                <Route path="/work" element={<WorkPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/loyaltycards" element={<LoyaltyCards/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
                <Route path="/reg" element={<RegistrationPage/>}/>
            </Routes>
            <ToastContainer />
        </>
    )
}

export default Application;
