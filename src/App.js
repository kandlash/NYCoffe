import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Application from "./jsx/Application";
import { OrderProvider } from "./jsx/OrdersContext";
import AuthProvider from "./jsx/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <Application />
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
