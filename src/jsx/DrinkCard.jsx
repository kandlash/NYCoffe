import React from "react";
import default_img from "../default_img.jpg"
import "../css/drink_card.css"

const DrinkCard = (props) =>{

    return(
        <div className="drink-card-container">
            <div className="drink-background">
                {
                    props.img ? (<><img src={props.img}></img></>) : (<><img src={default_img}></img></>)
                }
            </div>
            <div className="drink-name">
                {
                    props.name ? (<>{props.name}</>) : (<>Кремпай</>)
                }
            </div>
        </div>
    )
}

export default DrinkCard;
