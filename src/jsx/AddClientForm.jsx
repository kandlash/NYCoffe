import React, { useState } from 'react';
import "../css/add_cl_l.css"

const AddClientForm = ({ addClient }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient({ name, phone, card: '', coupon: '-', visits: 1 });
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
      className='cl-inp-fl'
        type="text"
        placeholder="ФИО"
        value={name}
        onChange={(e) => setName(e.target.value)}
        
      />
      <input
      className='cl-inp-fl'
        type="text"
        placeholder="Номер телефона"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
       
      />
      <button type="submit" style={buttonStyle}>Добавить клиента</button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
};

const inputStyle = {
  padding: '10px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
  width: '300px',
  color : 'black',
  backgroundColor : 'white',
};

const buttonStyle = {
    border: "none",
    borderRadius: "20px",
    fontSize: "1.2rem",
    color: "white",
    padding: "10px 15px",
    width: "150px",
    backgroundColor: "#016B36",
    cursor: "pointer",
    transition: "all 0.15s",
  };
  

export default AddClientForm;
