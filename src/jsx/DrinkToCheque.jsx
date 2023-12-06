// Ваш обновленный DrinkToCheque.jsx
import React, { useState } from "react";
import "../css/drink_to_cheque.css";

const DrinkToCheque = (props) => {

    const [choisedValue, setChoisedValue] = useState("Не выбрано");
    return (
        <>
            <div className="cheque-container">
                <div className="cheque-drink-name">{choisedValue} {props.selectedDrink}</div>
                {/* Здесь вы можете добавить содержимое своего DrinkToCheque компонента */}
            </div>
            <div className="drink-to-cheque-buttons-container">
                <div onClick={() => setChoisedValue("Большой")} className="drink-to-cheque-button">Большой</div>
                <div onClick={() => setChoisedValue("Стандартный")} className="drink-to-cheque-button">Стандартный</div>
            </div>
            <button onClick={() => props.switchPanel("drinks")}>Вернуться</button>
        </>
    );
}

export default DrinkToCheque;
