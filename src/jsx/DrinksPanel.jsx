// Ваш обновленный DrinksPanel.jsx
import React from "react";
import DrinkCard from "./DrinkCard";
import "../css/drinks_panel.css"

const DrinksPanel = (props) => {
    const handleDrinkCardClick = (drinkName) => {
        props.onDrinkCardClick(drinkName);
    };
    return (
        <div className="drinks-panel">
            <DrinkCard name="Латте" onClick={() => handleDrinkCardClick("Латте")} />
            <DrinkCard name="Американо" onClick={() => handleDrinkCardClick("Американо")} />
            <DrinkCard name="Капучино" onClick={() => handleDrinkCardClick("Капучино")} />
            <DrinkCard name="Допио" onClick={() => handleDrinkCardClick("Допио")} />
            <DrinkCard name="Кофе.." onClick={() => handleDrinkCardClick("Кофе..")} />
            <DrinkCard name="Друге кофе" onClick={() => handleDrinkCardClick("Друге кофе")} />
            {/* Другие компоненты DrinkCard */}
        </div>
    );
};

export default DrinksPanel;
