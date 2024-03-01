// Ваш обновленный DrinkToCheque.jsx
import React, { useState } from "react";
import "../css/drink_to_cheque.css";
import cofeimg from '../images/cofe-image.png';
import arrow from '../images/arrow_back_FILL0_wght400_GRAD0_opsz24.svg'

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
        <div className="cheque-wrapper">
            <div className="cheque-container">
                <div className="cheque-drink-name">{choisedValue} {props.selectedDrink}</div>
            </div>
            {currentContent === "drinkValue" ? (
                <div className="drink-to-cheque-buttons-container value-buttons">
                    <div onClick={() => handleChangeContent("Большой")}
                        className="drink-to-cheque-button">
                        <img width="80px" height="80px" alt="cheto" src={cofeimg}></img>
                        Большой
                    </div>
                    <div onClick={() => handleChangeContent("Стандарт")}
                        className="drink-to-cheque-button">
                        <img className="small-img" width="50px" height="50px" alt="cheto" src={cofeimg}></img>
                        Стандарт
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


                    </div>
                </div>
            )}
            <button onClick={() => setCurrentContent("drinkValue")} className="drink-to-cheque-extra-for-drink-navigation-button">
                <img alt="back-arrow" src={arrow}></img>
            </button>
            <button className="close-button" onClick={() => props.switchPanel("drinks")}>X</button>
        </div>
    );
}

export default DrinkToCheque;
