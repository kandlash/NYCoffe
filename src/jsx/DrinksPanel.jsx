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
            <DrinkCard name="ЭСПРЕССО" onClick={() => handleDrinkCardClick("ЭСПРЕССО")} />
            <DrinkCard name="МЛЕЧНЫЙ ПУТЬ" onClick={() => handleDrinkCardClick("МЛЕЧНЫЙ ПУТЬ")} />
            <DrinkCard name="ЧЕРНЫЙ" onClick={() => handleDrinkCardClick("ЧЕРНЫЙ")} />
            <DrinkCard name="КРАСНЫЙ" onClick={() => handleDrinkCardClick("КРАСНЫЙ")} />
            <DrinkCard name="ШИПОВНИК" onClick={() => handleDrinkCardClick("ШИПОВНИК")} />
            <DrinkCard name="РИСТРЕТО" onClick={() => handleDrinkCardClick("РИСТРЕТО")} />
            <DrinkCard name="КОФЕ С МОЛОКОМ" onClick={() => handleDrinkCardClick("КОФЕ С МОЛОКОМ")} />
            <DrinkCard name="ЗЕЛЕНЫЙ" onClick={() => handleDrinkCardClick("ЗЕЛЕНЫЙ")} />
            <DrinkCard name="ЗЕЛЕНЫЙ" onClick={() => handleDrinkCardClick("ЗЕЛЕНЫЙ")} />
            <DrinkCard name="ИМБИРНЫЙ" onClick={() => handleDrinkCardClick("ИМБИРНЫЙ")} />
            <DrinkCard name="КОФЕ" onClick={() => handleDrinkCardClick("КОФЕ")} />
            <DrinkCard name="ЧАЙ С МОЛОКОМ" onClick={() => handleDrinkCardClick("ЧАЙ С МОЛОКОМ")} />
            <DrinkCard name="КРАСНЫЙ" onClick={() => handleDrinkCardClick("КРАСНЫЙ")} />
            <DrinkCard name="ЛИБТОН" onClick={() => handleDrinkCardClick("ЛИБТОН")} />
            <DrinkCard name="МЕДОВЫЙ" onClick={() => handleDrinkCardClick("МЕДОВЫЙ")} />
            <DrinkCard name="ДОПИО" onClick={() => handleDrinkCardClick("ДОПИО")} />
            <DrinkCard name="КАКАО" onClick={() => handleDrinkCardClick("КАКАО")} />
            <DrinkCard name="ТИБЕТСКИЙ" onClick={() => handleDrinkCardClick("ТИБЕТСКИЙ")} />
            <DrinkCard name="КОЛД БРЮ" onClick={() => handleDrinkCardClick("КОЛД БРЮ")} />
            <DrinkCard name="УЛЕЙ" onClick={() => handleDrinkCardClick("УЛЕЙ")} />
            <DrinkCard name="АМЕРИКАНО" onClick={() => handleDrinkCardClick("АМЕРИКАНО")} />
            <DrinkCard name="ТАЙСКИЙ" onClick={() => handleDrinkCardClick("ТАЙСКИЙ")} />
            <DrinkCard name="ЯГОДНЫЙ" onClick={() => handleDrinkCardClick("ЯГОДНЫЙ")} />
            <DrinkCard name="ЛИМОНАД" onClick={() => handleDrinkCardClick("ЛИМОНАД")} />
            <DrinkCard name="ГОРЯЧИЙ ЛИМОНАД" onClick={() => handleDrinkCardClick("ГОРЯЧИЙ ЛИМОНАД")} />
            <DrinkCard name="ДАБЛ-АМЕРИКАНО" onClick={() => handleDrinkCardClick("ДАБЛ-АМЕРИКАНО")} />
            <DrinkCard name="АФРО" onClick={() => handleDrinkCardClick("АФРО")} />
            <DrinkCard name="ЦИТРУСОВЫЙ" onClick={() => handleDrinkCardClick("ЦИТРУСОВЫЙ")} />
            <DrinkCard name="АЙС КАКАО" onClick={() => handleDrinkCardClick("АЙС КАКАО")} />
            <DrinkCard name="МУСКАТНЫЙ ЧАЙ" onClick={() => handleDrinkCardClick("МУСКАТНЫЙ ЧАЙ")} />
            <DrinkCard name="КАПУЧИНО" onClick={() => handleDrinkCardClick("КАПУЧИНО")} />
            <DrinkCard name="КРЕМПАЙ" onClick={() => handleDrinkCardClick("КРЕМПАЙ")} />
            <DrinkCard name="УЛГУН" onClick={() => handleDrinkCardClick("УЛГУН")} />
            <DrinkCard name="АЙС ЛАТТЕ" onClick={() => handleDrinkCardClick("АЙС ЛАТТЕ")} />
            <DrinkCard name="ПРЯНЫЙ ЛАТТЕ" onClick={() => handleDrinkCardClick("ПРЯНЫЙ ЛАТТЕ")} />
            <DrinkCard name="ЛАТТЕ" onClick={() => handleDrinkCardClick("ЛАТТЕ")} />
            <DrinkCard name="БАУНТИ" onClick={() => handleDrinkCardClick("БАУНТИ")} />
            <DrinkCard name="ПУЭР" onClick={() => handleDrinkCardClick("ПУЭР")} />
            <DrinkCard name="БЕЛЫЙ РУЗКИЙ" onClick={() => handleDrinkCardClick("БЕЛЫЙ РУЗКИЙ")} />
            <DrinkCard name="БАБЬЕ ЛЕТО" onClick={() => handleDrinkCardClick("БАБЬЕ ЛЕТО")} />
            <DrinkCard name="РАФ" onClick={() => handleDrinkCardClick("РАФ")} />
            <DrinkCard name="СНИКЕРС" onClick={() => handleDrinkCardClick("СНИКЕРС")} />
            <DrinkCard name="МАТЕ" onClick={() => handleDrinkCardClick("МАТЕ")} />
            <DrinkCard name="АЙС КАПУЧИНО" onClick={() => handleDrinkCardClick("АЙС КАПУЧИНО")} />
            <DrinkCard name="ВИТАМИН" onClick={() => handleDrinkCardClick("ВИТАМИН")} />
            <DrinkCard name="МОКАЧИНО" onClick={() => handleDrinkCardClick("МОКАЧИНО")} />
            <DrinkCard name="ОТ ДЕДУЛИ" onClick={() => handleDrinkCardClick("ОТ ДЕДУЛИ")} />
            <DrinkCard name="ОТ БАБУЛИ" onClick={() => handleDrinkCardClick("ОТ БАБУЛИ")} />
            <DrinkCard name="ШМЕЛЬ" onClick={() => handleDrinkCardClick("ШМЕЛЬ")} />
            <DrinkCard name="СОЛЕНЫЙ РАФ" onClick={() => handleDrinkCardClick("СОЛЕНЫЙ РАФ")} />
            <DrinkCard name="ЛАТТЕ МАКИАТТО" onClick={() => handleDrinkCardClick("ЛАТТЕ МАКИАТТО")} />
            <DrinkCard name="ПОП-КОРН" onClick={() => handleDrinkCardClick("ПОП-КОРН")} />
            <DrinkCard name="ИВАН-ЧАЙ" onClick={() => handleDrinkCardClick("ИВАН-ЧАЙ")} />
            <DrinkCard name="КОКАИН" onClick={() => handleDrinkCardClick("КОКАИН")} />
            <DrinkCard name="ТРОПИЧЕСКИЙ РАФ" onClick={() => handleDrinkCardClick("ТРОПИЧЕСКИЙ РАФ")} />
            <DrinkCard name="ФЛЕТ УАЙТ" onClick={() => handleDrinkCardClick("ФЛЕТ УАЙТ")} />
            <DrinkCard name="НЕСКВИК" onClick={() => handleDrinkCardClick("НЕСКВИК")} />
            <DrinkCard name="ГЛИНТВЕЙН" onClick={() => handleDrinkCardClick("ГЛИНТВЕЙН")} />
            <DrinkCard name="БЕЙЛИС" onClick={() => handleDrinkCardClick("БЕЙЛИС")} />
            <DrinkCard name="СЛАДКОЕЖКА" onClick={() => handleDrinkCardClick("СЛАДКОЕЖКА")} />
        </div>
    );
};

export default DrinksPanel;
