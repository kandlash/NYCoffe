import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const ToastWithLink = ({ drinkName, price }) => (
  <div>
    Продан напиток {drinkName} за {price} руб. <Link to="/orders">Посмотреть</Link>
  </div>
);

const renderToast = (component) => {
  const toastContainer = document.getElementById('toast-container');
  ReactDOM.render(component, toastContainer);
};

export { ToastWithLink, renderToast };
