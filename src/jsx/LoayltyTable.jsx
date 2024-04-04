import React, { useState } from 'react';
import visit_icon from "../images/visit_icon.svg";
import trash_icon from "../images/trash_icon.svg";
import "../css/loaylty_table.css";

// Функция для генерации случайного числа в диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации случайного номера карты
function generateCardNumber() {
    return `${getRandomNumber(1000, 9999)}`;
}

// Функция для генерации данных о посещении
function generateVisits(count) {
    const visits = [];
    for (let i = 0; i < count; i++) {
        visits.push(<div key={i} className="visit">
            <img className='visit-img' src={visit_icon} alt="visit-icon"></img>
        </div>);
    }
    for(let i = 0; i < 5 - count; i++){
        visits.push(<div key={i} className="visit">
        </div>);
    }
    return visits;
}



// Компонент таблицы
const LoayltyTable = () => {
    // Генерация данных для каждого человека
    const [people, setPeople] = useState([
        { name: "Иванов Иван Иванович", phone: "+1234567890", card: generateCardNumber(), coupon: "-", visits: generateVisits(5) },
        { name: "Петров Петр Петрович", phone: "+9876543210", card: generateCardNumber(), coupon: "-", visits: generateVisits(3) },
        { name: "Сидоров Сидор Сидорович", phone: "+5556667777", card: generateCardNumber(), coupon: "-", visits: generateVisits(2) },
        { name: "Петров Петр Петрович", phone: "+9876543210", card: generateCardNumber(), coupon: "-", visits: generateVisits(3) },
        { name: "Петров Петр Петрович", phone: "+9876543210", card: generateCardNumber(), coupon: "-", visits: generateVisits(3) }
    ]);

    // Функция для удаления человека из списка
    const removePerson = (index) => {
        const updatedPeople = [...people];
        updatedPeople.splice(index, 1);
        setPeople(updatedPeople);
    };

    return (
        <div className='loaylty-table-container'>
            <table className='loyalty-table'>
                <thead>
                    <tr>
                        <th style={{ width: "355px" }}>ФИО</th>
                        <th style={{ width: "355px" }}>Номер телефона</th>
                        <th>Номер карты</th>
                        <th>Купон</th>
                        <th >Посещение</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, index) => (
                        <tr className='person-tr' key={index}>
                            <td>{person.name}</td>
                            <td>{person.phone}</td>
                            <td>{person.card}</td>
                            <td>{person.coupon}</td>
                            <td className='tdvisit'>
                                <div className='tdvisits-container'>
                                    {person.visits}
                                </div>
                            </td>
                            <button className='delete-person-button' onClick={() => removePerson(index)}>
                                <img className='trash-icon-img' src={trash_icon} alt="trash"/>
                            </button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default LoayltyTable;
