import React from "react";
import DrinkCard from "./DrinkCard";
import "../css/drinks_panel.css"

const DrinkPanel = () => {
    return(
        <div className="drink-panel-container">
            <DrinkCard name="Латте"></DrinkCard>
            <DrinkCard name="Кокаин"></DrinkCard>
            <DrinkCard></DrinkCard>
            <DrinkCard name="Латте"></DrinkCard>
            <DrinkCard name="Кокаин"></DrinkCard>
            <DrinkCard></DrinkCard>
            <DrinkCard name="Латте"></DrinkCard>
            <DrinkCard name="Кокаин"></DrinkCard>
            <DrinkCard></DrinkCard>
            <DrinkCard name="Латте"></DrinkCard>
            <DrinkCard name="Кокаин"></DrinkCard>
            <DrinkCard></DrinkCard>
            <DrinkCard name="Латте"></DrinkCard>
            <DrinkCard name="Кокаин"></DrinkCard>
            <DrinkCard></DrinkCard>
            <DrinkCard></DrinkCard>
            <DrinkCard></DrinkCard>
        </div>
    )
}

export default DrinkPanel;