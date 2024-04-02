import React from "react";
import WorkNavigation from "./WorkNavigation";
import LoayltyTable from "./LoayltyTable";

const LoyaltyCards = () => {
    return(
        <div className="loyalty-cards-wrapper">
            <WorkNavigation name="Карты" border={true}/>
            <LoayltyTable/>
        </div>
    )
}

export default LoyaltyCards;