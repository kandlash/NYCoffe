import React from "react";
import WorkNavigation from "./WorkNavigation";
import OrdersTable from "./OrdersTable";

const Orders = () => {
    return(
        <div className="orders-wrapper">
            <WorkNavigation name="База заказов" border={true}/>
            <OrdersTable></OrdersTable>
        </div>
    )
}

export default Orders;
