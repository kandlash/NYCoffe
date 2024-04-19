import React, { useContext, useEffect } from "react";
import WorkNavigation from "./WorkNavigation";
import LoayltyTable from "./LoayltyTable";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const LoyaltyCards = () => {
    const { isAdmin, isEmploye, isWorker } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAdmin && !isWorker && !isEmploye) {
            navigate("/");
        } else if (isEmploye) {
            navigate("/profile");
        }
    }, [isAdmin, isWorker, isEmploye, navigate]);
    return (
        <>
            {(isAdmin || isWorker) &&
                <div className="loyalty-cards-wrapper">
                    <WorkNavigation name="База карт " border={true} />
                    <LoayltyTable />
                </div>
            }
        </>


    )
}

export default LoyaltyCards;