// Ваш обновленный DrinkToCheque.jsx
import React, { useState } from "react";
import "../css/drink_to_cheque.css";

const DrinkToCheque = (props) => {

    const [choisedValue, setChoisedValue] = useState("");
    const [syrupValue, setSyrupValue] = useState(0);
    const [extraForDrinkValue, setExtraForDrinkValue] = useState(0);

    const [currentContent, setCurrentContent] = useState("drinkValue");

    const handleChangeContent = (drinkValue) => {
        setChoisedValue(drinkValue);
        setCurrentContent("extrasForDrink");
    }

    const incrementSyrup = () => {
        if (syrupValue < 10) {
            setSyrupValue(syrupValue + 1);
        }
    };

    const decrementSyrup = () => {
        if (syrupValue > 0) {
            setSyrupValue(syrupValue - 1);
        }
    };

    const incrementExtras = () => {
        if (extraForDrinkValue < 10) {
            setExtraForDrinkValue(extraForDrinkValue + 1);
        }
    };

    const decrementExtras = () => {
        if (extraForDrinkValue > 0) {
            setExtraForDrinkValue(extraForDrinkValue - 1);
        }
    };

    return (
        <>
            <div className="cheque-container">
                <div className="cheque-drink-name">{choisedValue} {props.selectedDrink}</div>
            </div>
            {currentContent === "drinkValue" ? (
                <div className="drink-to-cheque-buttons-container value-buttons">
                    <div onClick={() => handleChangeContent("БОЛЬШОЙ")}
                        className="drink-to-cheque-button">
                        БОЛЬШОЙ
                    </div>
                    <div onClick={() => handleChangeContent("СТАНДАРТ")}
                        className="drink-to-cheque-button">
                        СТАНДАРТ
                    </div>
                </div>
            ) : (
                <div className="dtink-to-cheque-extra-for-drink-wrapper">
                    <div className="drink-to-cheque-extra-for-drink-container">
                        <div className="drink-to-cheque-extra-for-drink">
                            <div className="drink-to-cheque-extra-for-drink-title">
                                Сироп
                            </div>
                            <div className="drink-to-cheque-extra-for-drink-buttons">
                                <button onClick={incrementSyrup} className="drink-to-cheque-extra-for-drink-button">
                                    +
                                </button>
                                <div className="drink-to-cheque-extra-for-drink-value">
                                    {syrupValue}
                                </div>
                                <button onClick={decrementSyrup} className="drink-to-cheque-extra-for-drink-button">
                                    -
                                </button>
                            </div>
                        </div>
                        <div className="drink-to-cheque-extra-for-drink">
                            <div className="drink-to-cheque-extra-for-drink-title">
                                Добавки
                            </div>
                            <div className="drink-to-cheque-extra-for-drink-buttons">
                                <button onClick={incrementExtras} className="drink-to-cheque-extra-for-drink-button">
                                    +
                                </button>
                                <div className="drink-to-cheque-extra-for-drink-value">
                                    {extraForDrinkValue}
                                </div>
                                <button onClick={decrementExtras} className="drink-to-cheque-extra-for-drink-button">
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="drink-to-cheque-extra-for-drink-navigation-buttons">
                        <button onClick={() => setCurrentContent("drinkValue")} className="drink-to-cheque-extra-for-drink-navigation-button">
                            Назад
                        </button>
                        <button className="drink-to-cheque-extra-for-drink-navigation-button">
                            Готово
                        </button>
                    </div>
                </div>
            )}

            <button onClick={() => props.switchPanel("drinks")}>Вернуться</button>
        </>
    );
}

export default DrinkToCheque;
