import React, {useState} from "react";
import TimePanel from "./TimePanel";
import DrinksPanel from "./DrinksPanel";

const WorkPage = () =>{
    const [drinkToCheque, setDrinkToCheque] = useState("close");

    const handleDrinkCardClick = (drinkName) =>{
        setDrinkToCheque(open);
    }

    return(
        <>
            <TimePanel></TimePanel>
            <DrinksPanel></DrinksPanel>
        </>
    )
}

export default WorkPage;