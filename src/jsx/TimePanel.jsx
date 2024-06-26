import React, { useState, useEffect } from "react";
import ClientPanel from "./ClientPanel";
import AddNewClientPanel from "./AddNewClientPanel";
import "../css/time_panel.css";
import { toast } from 'react-toastify';

const TimePanel = () => {
  const initialClients = JSON.parse(localStorage.getItem("clients")) || [];
  const [clients, setClients] = useState(initialClients);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
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
      // Вызов toast-уведомления
      toast.success(`Добавлен гость ${clientName}`, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
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
    toast.success(`Удален гость`, {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
  };

  const handleClientUpdate = (index, updatedClient) => {
    setClients((prevClients) =>
      prevClients.map((client, i) => (i === index ? { ...client, ...updatedClient } : client))
    );
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="time-panel-wrapper">
      <div className="time-panel-labels">
        <div className="time-panel-label">Имя</div>
        <div className="time-panel-label">Начало</div>
        <div className="time-panel-label">Конец</div>
        <div className="time-panel-label wider-label">Карта</div>
        <div className="time-panel-label">Скидка</div>
        <div className="time-panel-label">Сотрудник</div>
        <div className="time-panel-label">Именинник</div>
        <div className="time-panel-label">Цена</div>
        <div className="time-panel-label">Комментарий</div>
      </div>
      <div className="time-panel-container">
        {filteredClients.map((client, index) => (
          <ClientPanel
            key={index}
            name={client.name}
            arrival_time={client.arrival_time}
            exit_time={client.exit_time}
            isExit={client.isExit}
            cardNumber={client.cardNumber || ""}
            coupon={client.coupon || "нет"}
            employeeCheckbox={client.employeeCheckbox || false}
            birthdayCheckbox={client.birthdayCheckbox || false}
            comment={client.comment || ""}
            onExit={() => handleClientExit(index)}
            onRemove={() => handleClientRemove(index)}
            onUpdate={(updatedClient) => handleClientUpdate(index, updatedClient)}
            style={{backgroundColor: index % 2 === 0 ? '#016B36' : '#009B4D'}}
          />
        ))}
      </div>
      <AddNewClientPanel onAddClient={handleAddClient} />
    </div>
  );
};

export default TimePanel;
