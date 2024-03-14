// Ваш обновленный DrinksPanel.jsx
import React from "react";
import DrinkCard from "./DrinkCard";
import "../css/drinks_panel.css"

const DrinksPanel = ({onDrinkCardClick}) => {
    const handleDrinkCardClick = (drinkName) => {
        onDrinkCardClick(drinkName);
        console.log(drinkName);
    };
    const colors = [
        ['#BA0405', '#B50405', '#A30203', '#9D0203', '#880001'],
        ['#BA0405', '#B50405', '#A30203', '#9D0203', '#880001'],
        ['#BA0405', '#B50405', '#A30203', '#9D0203', '#880001'],
        ['#D06502', '#C86101', '#AC5403', '#A25004', '#9F4F05'],
        ['#D06502', '#C86101', '#AC5403', '#A25004', '#9F4F05'],
        ['#D06502', '#C86101', '#AC5403', '#A25004', '#9F4F05'],
        ['#123900', '#103201', '#0F2D00', '#0D2900', '#0A1E00'],
        ['#123900', '#103201', '#0F2D00', '#0D2900', '#0A1E00'],
        ['#123900', '#103201', '#0F2D00', '#0D2900', '#0A1E00'],
        ['#020068', '#02005F', '#020157', '#02004C', '#02004B'],
        ['#020068', '#02005F', '#020157', '#02004C', '#02004B'],
        ['#020068', '#02005F', '#020157', '#02004C', '#02004B'],
    ];
    const getCardStyle = (index) => {
        const colorIndex = Math.floor(index / 5) % colors.length;
        const color = colors[colorIndex][index % 5];
        return { backgroundColor: color };
    };

    const renderDrinkCards = () => {
        const drinkCardData = [
            'ЭСПРЕССО', 'МЛЕЧНЫЙ ПУТЬ', 'ЧЕРНЫЙ', 'КРАСНЫЙ', 'ШИПОВНИК', 'РИСТРЕТО',
            'КОФЕ С МОЛОКОМ', 'ЗЕЛЕНЫЙ', 'ЗЕЛЕНЫЙ', 'ИМБИРНЫЙ', 'КОФЕ', 'ЧАЙ С МОЛОКОМ',
            'КРАСНЫЙ', 'ЛИБТОН', 'МЕДОВЫЙ', 'ДОПИО', 'КАКАО', 'ТИБЕТСКИЙ', 'КОЛД БРЮ',
            'УЛЕЙ', 'АМЕРИКАНО', 'ТАЙСКИЙ', 'ЯГОДНЫЙ', 'ЛИМОНАД', 'ГОРЯЧИЙ ЛИМОНАД',
            'ДАБЛ-АМЕРИКАНО', 'АФРО', 'ЦИТРУСОВЫЙ', 'АЙС КАКАО', 'МУСКАТНЫЙ ЧАЙ', 'КАПУЧИНО',
            'КРЕМПАЙ', 'УЛГУН', 'АЙС ЛАТТЕ', 'ПРЯНЫЙ ЛАТТЕ', 'ЛАТТЕ', 'БАУНТИ', 'ПУЭР',
            'БЕЛЫЙ РУЗКИЙ', 'БАБЬЕ ЛЕТО', 'РАФ', 'СНИКЕРС', 'МАТЕ', 'АЙС КАПУЧИНО',
            'ВИТАМИН', 'МОКАЧИНО', 'ОТ ДЕДУЛИ', 'ОТ БАБУЛИ', 'ШМЕЛЬ', 'СОЛЕНЫЙ РАФ',
            'ЛАТТЕ МАКИАТТО', 'ПОП-КОРН', 'ИВАН-ЧАЙ', 'КОКАИН', 'ТРОПИЧЕСКИЙ РАФ', 'ФЛЕТ УАЙТ',
            'НЕСКВИК', 'ГЛИНТВЕЙН', 'БЕЙЛИС', 'СЛАДКОЕЖКА',
        ];
        return drinkCardData.map((drinkName, index) => (
            <DrinkCard
                key={index}
                name={drinkName}
                onClick={() => handleDrinkCardClick(drinkName)}
                style={getCardStyle(index)}
            />
        ));
    };


    return (
        <div className="drinks-panel">
            {renderDrinkCards()}
        </div>
    );
};

export default DrinksPanel;
