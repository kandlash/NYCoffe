import React, { useContext } from "react";
import "../css/orderscash.css";
import { TotalContext } from './TotalContext';

const OrdersCash = () =>{
    const { total } = useContext(TotalContext);

    return(
        <div className="orderscash-wrapper">
            <div className="orderscash-title">Общая сумма:</div>
            <div className="orderscash-value">{total}р.</div>
        </div>
    )
}

export default OrdersCash;
