// Ваш обновленный TimePanel.jsx
import React, { useState } from "react";
import ClientPanel from "./ClientPanel";
import AddNewClientPanel from "./AddNewClientPanel";
import "../css/time_panel.css"

const TimePanel = () => {
  const [clients, setClients] = useState([
  ]);

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
    const updatedClients = [...clients];
    updatedClients[index].exit_time = new Date().toLocaleTimeString();
    updatedClients[index].isExit = true;
    setClients(updatedClients);
  };

  const handleClientRemove = (index) => {
    const updatedClients = [...clients];
    updatedClients.splice(index, 1);
    setClients(updatedClients);
  };

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
      </div>
      <div className="time-panel-container">
        {clients.map((client, index) => (
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
        <AddNewClientPanel onAddClient={handleAddClient} />
      </div>
    </div>

  );
};

export default TimePanel;
