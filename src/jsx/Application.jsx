import React from "react";
import {Routes, Route, Link} from 'react-router-dom';

import ActivationPage from "./ActivationPage";
import AuthPage from "./AuthPage";
import AuthToWorkPage from "./AuthToWorkPage";
import WorkPage from "./WorkPage";

const Application = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<ActivationPage/>}/>
                <Route path="/auth" element={<AuthPage/>}/>
                <Route path="/authtowork" element={<AuthToWorkPage/>}/>
                <Route path="/work" element={<WorkPage/>}/>
            </Routes>
        </>
    )
}

export default Application;