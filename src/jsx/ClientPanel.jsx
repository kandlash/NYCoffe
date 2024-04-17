import React, { useState, useEffect, useCallback } from "react";
import '../css/client.css'
import trash_icon from "../images/trash_icon.svg";

const ClientPanel = (props) => {
  const [price, setPrice] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const [coupon, setCoupon] = useState("нет");
  const [employeeCheckbox, setEmployeeCheckbox] = useState(false);
  const [birthdayCheckbox, setBirthdayCheckbox] = useState(false);

  const handleRemove = () => {
    props.onRemove();
  };

  const calculatePrice = useCallback(() => {
    if (!props.exit_time) return;

    const arrivalTime = new Date(`2000-01-01T${props.arrival_time}`);
    const exitTime = new Date(`2000-01-01T${props.exit_time}`);
    const timeDiff = isNaN(arrivalTime) || isNaN(exitTime) ? 0 : Math.ceil((exitTime - arrivalTime) / (1000 * 60));
    let basePrice = timeDiff * 3.5;

    if (cardNumber) {
      basePrice -= 1;
    }

    if (coupon !== "нет") {
      basePrice -= timeDiff > parseInt(coupon) ? parseInt(coupon) : timeDiff;
    }

    if (employeeCheckbox) {
      basePrice -= 1;
    }

    if (birthdayCheckbox) {
      basePrice = 0;
    }

    setPrice(basePrice);
  }, [props.arrival_time, props.exit_time, cardNumber, coupon, employeeCheckbox, birthdayCheckbox]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (props.exit_time) {
        calculatePrice();
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [props.exit_time, calculatePrice]);

  return (
    <div className="client-container" style={props.style}>
      <div className="name-container">{props.name}</div>
      <div className="arrival-time-container">{props.arrival_time}</div>
      {!props.isExit ? (
        <div>
          <button className="exit-button" onClick={props.onExit}>Ушел</button>
        </div>
      ) : (
        <>
          <div className="exit-time-container">{props.exit_time}</div>
        </>
      )}
      <div className="chek-box-container wider">
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}></input>
      </div>
      <div className="chek-box-container">
        <select value={coupon} onChange={(e) => setCoupon(e.target.value)}>
          <option>нет</option>
          <option>15 минут</option>
          <option>30 минут</option>
        </select>
      </div>
      <div className="chek-box-container">
        <input type="checkbox" checked={employeeCheckbox} onChange={() => setEmployeeCheckbox(!employeeCheckbox)}></input>
      </div>
      <div className="chek-box-container">
        <input type="checkbox" checked={birthdayCheckbox} onChange={() => setBirthdayCheckbox(!birthdayCheckbox)}></input>
      </div>
      <div className="chek-box-container price-container">{price} руб.</div>
      <div className="card-input-container"><input className="comment-input" type="text"></input></div>
      <button className="delete-client-button" onClick={handleRemove}>
        <img src={trash_icon} alt="trash"/>
      </button>
    </div>
  );
};

export default ClientPanel;
