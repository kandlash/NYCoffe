import React from 'react';
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
        visits.push(<div key={i} className="visit"></div>);
    }
    return visits;
}

// Компонент таблицы
const LoayltyTable = () => {
    // Генерация данных для каждого человека
    const people = [
        { name: "Иванов Иван Иванович", phone: "+1234567890", card: generateCardNumber(), coupon: "-", visits: generateVisits(4) },
        { name: "Петров Петр Петрович", phone: "+9876543210", card: generateCardNumber(), coupon: "-", visits: generateVisits(3) },
        { name: "Сидоров Сидор Сидорович", phone: "+5556667777", card: generateCardNumber(), coupon: "-", visits: generateVisits(2) }
    ];

    return (
        <div className='loaylty-table-container'>
            <table>
                <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Номер телефона</th>
                        <th>Номер карты</th>
                        <th>Купон</th>
                        <th>Посещение</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, index) => (
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.phone}</td>
                            <td>{person.card}</td>
                            <td>{person.coupon}</td>
                            <td className='tdvisit'>{person.visits}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default LoayltyTable;
