import React, { useState } from "react";

const AddNewClientPanel = ({ onAddClient }) => {
  const [clientName, setClientName] = useState("");

  const handleAddClient = () => {
    if (clientName.trim() !== "") {
      onAddClient(clientName);
      setClientName("");
    }
  };

  return (
    <div className="add-new-client-panel-container">
      <input
        type="text"
        placeholder="Имя гостя"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <button onClick={handleAddClient}>Пришел</button>
    </div>
  );
};

export default AddNewClientPanel;
