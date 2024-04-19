import React, { useContext, useEffect, useState } from "react";
import TimePanel from "./TimePanel";
import DrinksPanel from "./DrinksPanel";
import DrinkToCheque from "./DrinkToCheque";
import WorkNavigation from "./WorkNavigation";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const WorkPage = () => {
    const [drinkToChequeName, setDrinkToChequeName] = useState("");
    const [isCheque, setIsCheque] = useState(false);

    const { isAdmin, isEmploye, isWorker } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAdmin && !isWorker && !isEmploye) {
            navigate("/");
        } else if (isEmploye) {
            navigate("/profile");
        } else if (isAdmin) {
            navigate("/admin");
        }
    }, [isAdmin, isWorker, isEmploye, navigate]);

    const handleDrinkCardClick = (drinkName) => {
        setDrinkToChequeName(drinkName);
        console.log(drinkToChequeName);
        setIsCheque(true);
    }

    const closeCheque = () => {
        setIsCheque(false);
    }

    return (
        <>
            {isWorker && <>
                <WorkNavigation name="Заказы" />
                <TimePanel></TimePanel>
                <div className="drinks-work-container">
                    <DrinksPanel onDrinkCardClick={handleDrinkCardClick}></DrinksPanel>
                    {isCheque === true && <DrinkToCheque closeCheque={closeCheque} drinkName={drinkToChequeName} />}
                </div>
            </>}
        </>
    )
}

export default WorkPage;
