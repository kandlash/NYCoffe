import React, { useContext, useState } from 'react';
import ClientLoyalty from './ClientLoyalty';
import "../css/loaylty_table.css";
import AddClientForm from './AddClientForm';
import AuthContext from './AuthContext';

const LoayltyTable = () => {

    const { clients, saveClients } = useContext(AuthContext);

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateCardNumber() {
        return `${getRandomNumber(1000, 9999)}`;
    }

    const addVisit = (index) => {
        const newClients = [...clients];
        newClients[index].visits += 1;
        if (newClients[index].visits === 5) {
            newClients[index].card = generateCardNumber();
        }
        saveClients(newClients);
    };

    const addClient = (client) => {
        saveClients([...clients, client]);
    };

    return (
        <div className='loaylty-table-container'>
            <table className='loyalty-table'>
                <thead>
                    <tr>
                        <th style={{ width: "500px" }}>ФИО</th>
                        <th style={{ width: "355px" }}>Номер телефона</th>
                        <th>Номер карты</th>
                        <th>Купон</th>
                        <th >Посещение</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client, index) => (
                        <ClientLoyalty
                            key={index}
                            client={client}
                            addVisit={addVisit}
                            index={index}
                        />
                    ))}
                </tbody>
            </table>
            <AddClientForm addClient={addClient} />
        </div>
    );
};

export default LoayltyTable;
