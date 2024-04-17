import React, { useState, useContext } from 'react';
import "../css/orders_table.css";
import { OrderContext } from './OrdersContext';

// Компонент таблицы заказанных напитков
const OrdersTable = ({ drinksData }) => {
    const { orders } = useContext(OrderContext);
    const fakeDrinksData = [
        {
            name: "Латте",
            volume: "Стандарт",
            syrups: ["1"],
            additions: ["1"],
            price: 120,
            comment: "присыпка"
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
            {orders.map((order, index) => (
            <tr className='modtr' key={index}>
              <td>{order.name}</td>
              <td>{order.volume}</td>
              <td>{order.syrups}</td>
              <td>{order.additions}</td>
              <td>{order.price}р.</td>
              <td><input type="text" value={comments[index]} onChange={(e) => handleCommentChange(index, e)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
