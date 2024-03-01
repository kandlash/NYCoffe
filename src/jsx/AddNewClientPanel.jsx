import React, { useState } from "react";
import '../css/add_new_client.css'
import logo from '../images/nycoffelogo.png';
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
      <div className="input-container">
        <input
          className="client-name-input-field"
          type="text"
          placeholder="Имя гостя"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <button className="add-client-button" onClick={handleAddClient}>ПРИШЕЛ</button>
      </div>
      <div className="logotype-container">
        <img className="logotype-image" alt="nycoffelogo" src={logo}></img>
        <div className="logo-text">NEW YORK COFFEE</div>
      </div>
    </div>
  );
};

export default AddNewClientPanel;
