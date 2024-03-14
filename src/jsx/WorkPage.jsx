import React, {useState} from "react";
import TimePanel from "./TimePanel";
import DrinksPanel from "./DrinksPanel";
import DrinkToCheque from "./DrinkToCheque";
import WorkNavigation from "./WorkNavigation";

const WorkPage = () =>{
    const [drinkToChequeName, setDrinkToChequeName] = useState("");
    const [isCheque, setIsCheque] = useState(false);

    const handleDrinkCardClick = (drinkName) =>{
        setDrinkToChequeName(drinkName);
        console.log(drinkToChequeName);
        setIsCheque(true);
    }

    const closeCheque = () =>{
        setIsCheque(false);
    }

    return(
        <>
            <WorkNavigation name="Заказы"/>
            <TimePanel></TimePanel>
            <DrinksPanel onDrinkCardClick={handleDrinkCardClick}></DrinksPanel>
            {isCheque === true && <DrinkToCheque closeCheque={closeCheque} drinkName={drinkToChequeName} />}
        </>
    )
}

export default WorkPage;
