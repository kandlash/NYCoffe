// Ваш обновленный DrinkCard.jsx
import React from "react";
import default_img from "../default_img.jpg"
import "../css/drink_card.css"

const DrinkCard = (props) =>{
    return(
        <div style={props.style} className="drink-card-container">
            <button onClick={() => props.onClick(props.name)} className="drink-button">
                {
                    props.name ? (<>{props.name}</>) : (<>Кремпай</>)
                }
            </button>
        </div>
    )
}

export default DrinkCard;
