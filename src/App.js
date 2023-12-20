// Ваш обновленный App.js
import React, { useState } from "react";
import './App.css';
import DrinksPanel from './jsx/DrinksPanel';
import TimePanel from './jsx/TimePanel';
import DrinkToCheque from "./jsx/DrinkToCheque";

function App() {
  const [currentPanel, setCurrentPanel] = useState("drinks");
  const [selectedDrink, setSelectedDrink] = useState("");

  const switchPanel = (panel) => {
    setCurrentPanel(panel);
  };

  const handleDrinkCardClick = (drinkName) => {
    setSelectedDrink(drinkName);
    switchPanel("cheque");
  };

  return (
    <div className="App">
      <TimePanel switchPanel={switchPanel}></TimePanel>
      <div className="drinks-panel-title--">
        Напитки
      </div>
      {currentPanel === "cheque" && <DrinkToCheque switchPanel={switchPanel} selectedDrink={selectedDrink} />}
      {currentPanel === "drinks" && <DrinksPanel onDrinkCardClick={handleDrinkCardClick}/>}
    </div>
  );
}

export default App;
