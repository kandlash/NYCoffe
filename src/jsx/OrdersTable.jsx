import React, { useState } from 'react';
import "../css/orders_table.css";

// Компонент таблицы заказанных напитков
const OrdersTable = ({ drinksData }) => {
    const fakeDrinksData = [
        {
            name: "Латте",
            volume: "Стандарт",
            syrups: ["1"],
            additions: ["1"],
            price: 120,
            comment: "присыпка"
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }, {
            name: "Кокаин",
            volume: "Большой",
            syrups: ["1"],
            additions: ["2"],
            price: 500,
            comment: ""            
        }
    ];

    const [comments, setComments] = useState(Array(fakeDrinksData.length).fill(''));

    // Обработчик изменения комментария
    const handleCommentChange = (index, event) => {
        const newComments = [...comments];
        newComments[index] = event.target.value;
        setComments(newComments);
    };



    return (
        <div className='orders-table-container'>
            <table className='orders-table'>
                <thead>
                    <tr>
                        <th>Напиток</th>
                        <th>Объем</th>
                        <th>Сиропы</th>
                        <th>Добавки</th>
                        <th>Цена</th>
                        <th style={{width: "355px"}}>Комментарий</th>
                    </tr>
                </thead>
                <tbody>
                    {fakeDrinksData.map((drink, index) => (
                        <tr className='modtr' key={index}>
                            <td>{drink.name}</td>
                            <td>{drink.volume}</td>
                            <td>{drink.syrups.join(', ')}</td>
                            <td>{drink.additions.join(', ')}</td>
                            <td>{drink.price}</td>
                            <td><input type="text" value={comments[index]} onChange={(e) => handleCommentChange(index, e)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default OrdersTable;
