import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ФИО"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Номер телефона"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Добавить клиента</button>
    </form>
  );
};

export default AddClientForm;
