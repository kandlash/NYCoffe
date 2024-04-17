import React, { useState, useContext, useEffect } from "react";
import "../css/drink_to_cheque.css";
import cofeimg from '../images/cofe-image.png';
import arrow from '../images/arrow_back_FILL0_wght400_GRAD0_opsz24.svg'
import { toast } from 'react-toastify';
import { OrderContext } from "./OrdersContext";
import { ToastWithLink, renderToast } from "./ToastWithLink";


const DrinkToCheque = (props) => {
    const { addOrder } = useContext(OrderContext);
    const [choisedValue, setChoisedValue] = useState("");
    const [syrupValue, setSyrupValue] = useState(0);
    const [extraForDrinkValue, setExtraForDrinkValue] = useState(0);
    const [totalPrice, setTotalPrice] = useState(100); // Базовая цена напитка

    const [currentContent, setCurrentContent] = useState("drinkValue");
    const [additionsPrice, setAdditionsPrice] = useState(0);

    const updateTotalPrice = (drinkValue) =>{
        if (drinkValue === "Большой") {
            setTotalPrice(100 + 50); // Цена большого напитка
        } else if (drinkValue === "Стандарт") {
            setTotalPrice(100); // Цена стандартного напитка
        }
    }

    const updateAdditionsPrice = (syrup, extras) =>{
        const additionPriceConst = 2;
        console.log("Updating additionsPrice");
        console.log("---- syrop: " + syrup);
        console.log("---- extras: " + extras);
        setAdditionsPrice(additionPriceConst * (syrup + extras));
    }

    const handleChangeContent = (drinkValue) => {
        setChoisedValue(drinkValue);
        updateTotalPrice(drinkValue);
        setCurrentContent("extrasForDrink");
    }

    const incrementSyrup = () => {
        if (syrupValue < 10) {
            setSyrupValue(syrupValue + 1);
            updateAdditionsPrice(syrupValue + 1, extraForDrinkValue);
        }
        
    };

    const decrementSyrup = () => {
        if (syrupValue > 0) {
            setSyrupValue(syrupValue - 1);
            updateAdditionsPrice(syrupValue - 1, extraForDrinkValue);
        }
        
    };

    const incrementExtras = () => {
        if (extraForDrinkValue < 10) {
            setExtraForDrinkValue(extraForDrinkValue + 1);
            updateAdditionsPrice(syrupValue, extraForDrinkValue + 1);
        }
        
    };

    const decrementExtras = () => {
        if (extraForDrinkValue > 0) {
            setExtraForDrinkValue(extraForDrinkValue - 1);
            updateAdditionsPrice(syrupValue, extraForDrinkValue - 1);
        }
        
    };

    const handleCreateClick = () => {
        const totalPriceWithAdditions = totalPrice + additionsPrice;
        console.log("Итоговая цена:", totalPriceWithAdditions);
    
        // Вызов toast-уведомления
  // Вызов toast-уведомления с кастомным компонентом
  // Вызов toast-уведомления с кастомным компонентом
  const toastId = toast.success('', {
    position: "bottom-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  // Обновление содержимого toast-уведомления
  toast.update(toastId, {
    render: () => (
      <ToastWithLink drinkName={props.drinkName} price={totalPriceWithAdditions} />
    ),
  });
        addOrder({
            name: props.drinkName,
            volume: choisedValue,
            syrups: syrupValue,
            additions: extraForDrinkValue,
            price: totalPriceWithAdditions,
            comment: ''
          });
        props.closeCheque();
    };

    return (
        <div className="cheque-wrapper">
            <div className="cheque-container">
                <div className="cheque-drink-name">{choisedValue} {props.drinkName}</div>
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
                                <button onClick={incrementSyrup} className="drink-to-cheque-extra-for-drink-button incsyrop">
                                    +
                                </button>
                                <div className="drink-to-cheque-extra-for-drink-value">
                                    {syrupValue}
                                </div>
                                <button onClick={decrementSyrup} className="drink-to-cheque-extra-for-drink-button decsyrop">
                                    -
                                </button>
                            </div>
                        </div>
                        <div className="drink-to-cheque-extra-for-drink">
                            <div className="drink-to-cheque-extra-for-drink-title">
                                Добавки
                            </div>
                            <div className="drink-to-cheque-extra-for-drink-buttons">
                                <button onClick={incrementExtras} className="drink-to-cheque-extra-for-drink-button incextra">
                                    +
                                </button>
                                <div className="drink-to-cheque-extra-for-drink-value">
                                    {extraForDrinkValue}
                                </div>
                                <button onClick={decrementExtras} className="drink-to-cheque-extra-for-drink-button decextra">
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={() => setCurrentContent("drinkValue")} className={"navigation-button" + (currentContent === "drinkValue" ? " " : " visible")}>
                <img alt="back-arrow" src={arrow}></img>
            </button>
            <button onClick={handleCreateClick} className={"create-button" + (currentContent === "drinkValue" ? " " : " visible")}>
                Продать {totalPrice + additionsPrice}р.
            </button>
            <button className="close-button" onClick={() => props.closeCheque()}>X</button>
        </div>
    );
}

export default DrinkToCheque;
