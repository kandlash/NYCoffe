import React, { createContext, useState, useEffect } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
    // setOrders([]);
    // localStorage.removeItem('orders');
  }, []);

  const addOrder = (order) => {
    setOrders([...orders, order]);
    localStorage.setItem('orders', JSON.stringify([...orders, order]));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
