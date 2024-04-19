import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WorkNavigation from "./WorkNavigation";
import OrdersTable from "./OrdersTable";
import OrdersCash from "./OrdersCash";
import { TotalProvider } from "./TotalContext";
import AuthContext from "./AuthContext";

const Orders = () => {
    const { isAdmin, isEmploye, isWorker } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAdmin && !isWorker && !isEmploye) {
            navigate("/");
        } else if(isEmploye){
            navigate("/profile");
        }
    }, [isAdmin, isWorker, isEmploye, navigate]);

    return (
            <div className="orders-wrapper">
                <WorkNavigation name="База заказов" border={true} />
                <TotalProvider>
                    <OrdersTable></OrdersTable>
                    <OrdersCash></OrdersCash>
                </TotalProvider>
            </div>
    )
}

export default Orders;
