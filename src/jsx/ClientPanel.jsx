import React, { useState, useEffect, useCallback, useContext } from "react";
import '../css/client.css'
import trash_icon from "../images/trash_icon.svg";
import AuthContext from "./AuthContext";

const ClientPanel = (props) => {
  const [price, setPrice] = useState(0);
  const [cardNumber, setCardNumber] = useState(props.cardNumber);
  const [coupon, setCoupon] = useState(props.coupon);
  const [employeeCheckbox, setEmployeeCheckbox] = useState(props.employeeCheckbox);
  const [birthdayCheckbox, setBirthdayCheckbox] = useState(props.birthdayCheckbox);
  const [comment, setComment] = useState(props.comment || "");
  const [cards, setCards] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [filteredCards, setFilteredCards] = useState([]);
  const { clients } = useContext(AuthContext);

  useEffect(() => {
    const storedCards = clients
    console.log(storedCards)
    setCards(storedCards);
  }, []);

  const handleRemove = () => {
    props.onRemove();
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    props.onUpdate({ comment: e.target.value });
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

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
    setShowCards(!!e.target.value);
    props.onUpdate({ cardNumber: e.target.value });
    const regex = new RegExp(`^${e.target.value}`, 'i');
    const filtered = cards.filter(card => regex.test(card.card) || regex.test(card.name.split(' ')[0]));
    setFilteredCards(filtered);
    console.log(filtered);
  };
  

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
    props.onUpdate({ coupon: e.target.value });
  };

  const handleEmployeeCheckboxChange = () => {
    setEmployeeCheckbox(!employeeCheckbox);
    props.onUpdate({ employeeCheckbox: !employeeCheckbox });
  };

  const handleBirthdayCheckboxChange = () => {
    setBirthdayCheckbox(!birthdayCheckbox);
    props.onUpdate({ birthdayCheckbox: !birthdayCheckbox });
  };

  const handleCardSelect = (card) => {
    setCardNumber(card.card);
    setShowCards(false);
    props.onUpdate({ cardNumber: card.card });
  };

  const filterCards = (cards, search) => {
    const regex = new RegExp(`^${search}`, 'i');
    return cards.filter(card => regex.test(card.card) || regex.test(card.name.split(' ')[0]));
  }

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
        <input type="text" value={cardNumber} onChange={handleCardNumberChange}></input>
        {showCards && (
          <div className="card-list">
            {filteredCards.map((card) => (
              <div className="card-item" key={card.card} onClick={() => handleCardSelect(card)}>
                {card.card} <br></br>{card.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="chek-box-container">
        <select value={coupon} onChange={handleCouponChange}>
          <option>нет</option>
          <option>15 минут</option>
          <option>30 минут</option>
        </select>
      </div>
      <div className="chek-box-container">
        <input type="checkbox" checked={employeeCheckbox} onChange={handleEmployeeCheckboxChange}></input>
      </div>
      <div className="chek-box-container">
        <input type="checkbox" checked={birthdayCheckbox} onChange={handleBirthdayCheckboxChange}></input>
      </div>
      <div className="chek-box-container price-container">{price} руб.</div>
      <input className="comment-input" type="text" value={comment} onChange={handleCommentChange}></input>
      <button className="delete-client-button" onClick={handleRemove}>
        <img src={trash_icon} alt="trash"/>
      </button>
    </div>
  );
};

export default ClientPanel;
