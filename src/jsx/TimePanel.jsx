import React, { useState, useEffect } from "react";
import ClientPanel from "./ClientPanel";
import AddNewClientPanel from "./AddNewClientPanel";
import "../css/time_panel.css";

const TimePanel = () => {
  const initialClients = JSON.parse(localStorage.getItem("clients")) || [];
  const [clients, setClients] = useState(initialClients);
  const [searchQuery, setSearchQuery] = useState(""); // Новое состояние для хранения значения поиска

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
    // Удалите следующую строку, чтобы не очищать localStorage при каждом обновлении clients
    // localStorage.clear();
  }, [clients]);

  const handleAddClient = (clientName) => {
    const currentTime = new Date().toLocaleTimeString();
    const newClient = {
      name: clientName,
      arrival_time: currentTime,
      exit_time: "",
      isExit: false,
    };
    setClients([...clients, newClient]);
  };

  const handleClientExit = (index) => {
    setClients((prevClients) =>
      prevClients.map((client, i) =>
        i === index
          ? { ...client, exit_time: new Date().toLocaleTimeString(), isExit: true }
          : client
      )
    );
  };

  const handleClientRemove = (index) => {
    setClients((prevClients) => prevClients.filter((_, i) => i !== index));
  };

  // Функция для фильтрации клиентов по имени
  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="time-panel-wrapper">
      <div className="time-panel-labels">
        <div className="time-panel-label">Имена</div>
        <div className="time-panel-label">Прибытие</div>
        <div className="time-panel-label">Отбытие</div>
        <div className="time-panel-label">Карта</div>
        <div className="time-panel-label" id="card-show">15 минут</div>
        <div className="time-panel-label" id="card-show">30 минут</div>
        <div className="time-panel-label" id="card-hide">Сотрудник</div>
        <div className="time-panel-label" id="card-hide">Именинник</div>
        <div className="time-panel-label" id="card-show">Номер карты</div>
        <div className="time-panel-label">Цена</div>
        <div className="search-clients">
          <input
            type="search"
            placeholder="Найти клиента"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="time-panel-container">
        {filteredClients.map((client, index) => (
          <ClientPanel
            key={index}
            name={client.name}
            arrival_time={client.arrival_time}
            exit_time={client.exit_time}
            isExit={client.isExit}
            onExit={() => handleClientExit(index)}
            onRemove={() => handleClientRemove(index)}
          />
        ))}
      </div>
      <AddNewClientPanel onAddClient={handleAddClient} />
    </div>
  );
};

export default TimePanel;
