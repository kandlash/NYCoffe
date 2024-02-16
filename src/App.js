import React, { useState } from "react";
import './css/app.css';
import DrinksPanel from './jsx/DrinksPanel';
import TimePanel from './jsx/TimePanel';
import DrinkToCheque from "./jsx/DrinkToCheque";
import AuthPanel from "./jsx/AuthPanel";

function App() {
  const [currentPanel, setCurrentPanel] = useState("drinks");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [isAuthPanel, setIsAuthPanel] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const switchPanel = (panel) => {
    setCurrentPanel(panel);
  };

  const handleDrinkCardClick = (drinkName) => {
    setSelectedDrink(drinkName);
    switchPanel("cheque");
  };

  return (
    <div className="wrapper">
      {isAuthPanel ? (
        <AuthPanel></AuthPanel>
      ):(
        <div className="App">
          <TimePanel switchPanel={switchPanel}></TimePanel>
          <div className="drinks-panel-title--">
            Напитки
          </div>
          {currentPanel === "cheque" && <DrinkToCheque switchPanel={switchPanel} selectedDrink={selectedDrink} />}
          {currentPanel === "drinks" && <DrinksPanel onDrinkCardClick={handleDrinkCardClick}/>}
        </div>
      )}
    </div>

  );
}

export default App;
