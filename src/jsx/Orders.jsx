import React from "react";
import { useLocation } from "react-router-dom";
import WorkNavigation from "./WorkNavigation";
import OrdersTable from "./OrdersTable";
import OrdersCash from "./OrdersCash";
import { TotalProvider } from "./TotalContext";

const Orders = () => {
    const location = useLocation();
    const isAdmin = location.state?.isAdmin || false;
    return(
        <div className="orders-wrapper">
            <WorkNavigation name="База заказов" border={true} isAdmin={isAdmin}/>
            <TotalProvider>
                <OrdersTable></OrdersTable>
                <OrdersCash></OrdersCash>
            </TotalProvider>
        </div>
    )
}

export default Orders;
