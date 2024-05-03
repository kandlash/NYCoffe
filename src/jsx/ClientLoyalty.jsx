import React, { useContext, useState } from 'react';
import visit_icon from "../images/visit_icon.svg";
import "../css/loaylty_table.css";
import AuthContext from './AuthContext';

const ClientLoyalty = ({ client, addVisit, index }) => {
  const [visits, setVisits] = useState(generateVisits(client.visits));
  const { saveClients, clients } = useContext(AuthContext);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateCardNumber() {
    return `${getRandomNumber(1000, 9999)}`;
  }

  function generateVisits(count) {
    const visits = [];
    for (let i = 0; i < count; i++) {
      visits.push(<div key={i} className="visit">
        <img className='visit-img' src={visit_icon} alt="visit-icon"></img>
      </div>);
    }
    for (let i = 0; i < 5 - count; i++) {
      visits.push(<div key={i} className="visit">
      </div>);
    }
    return visits;
  }

  const handleAddVisit = () => {
    if (client.visits < 5) {
      const newClients = [...clients];
      newClients[index].visits += 1;

      if (newClients[index].visits === 5) {
        newClients[index].card = generateCardNumber();
      }

      saveClients(newClients);
      setVisits(generateVisits(newClients[index].visits));
    }
  };

  return (
    <tr className='person-tr'>
      <td>{client.name}</td>
      <td>{client.phone}</td>
      <td>{client.visits >= 5 ? client.card : "-"}</td>
      <td>{client.coupon}</td>
      <td className='tdvisit'>
        <div className='tdvisits-container'>
          {visits}
        </div>
      </td>
      <td>
        <button className='delete-person-button' onClick={handleAddVisit} disabled={client.visits >= 5}>
          +
        </button>
      </td>
    </tr>
  );
};

export default ClientLoyalty;
