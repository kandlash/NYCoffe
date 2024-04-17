import React from "react";
import WorkNavigation from "./WorkNavigation";
import OrdersTable from "./OrdersTable";
import OrdersCash from "./OrdersCash";
import { TotalProvider } from "./TotalContext";

const Orders = () => {
    return(
        <div className="orders-wrapper">
            <WorkNavigation name="База заказов" border={true}/>
            <TotalProvider>
                <OrdersTable></OrdersTable>
                <OrdersCash></OrdersCash>
            </TotalProvider>
        </div>
    )
}

export default Orders;
