import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Application from "./jsx/Application";
import { OrderProvider } from "./jsx/OrdersContext";

function App() {
  return (
    <BrowserRouter>
      <OrderProvider>
        <Application/>
      </OrderProvider>
    </BrowserRouter>
  );
}

export default App;
