// Ваш обновленный TimePanel.jsx
import React, { useState } from "react";
import ClientPanel from "./ClientPanel";
import AddNewClientPanel from "./AddNewClientPanel";

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
  );
};

export default TimePanel;
