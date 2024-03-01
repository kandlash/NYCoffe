import React, { useState, useEffect } from "react";
import './css/app.css';
import DrinksPanel from './jsx/DrinksPanel';
import TimePanel from './jsx/TimePanel';
import DrinkToCheque from "./jsx/DrinkToCheque";
import AuthPanel from "./jsx/AuthPanel";

function App() {
  const [currentPanel, setCurrentPanel] = useState("drinks");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [isAuthPanel, setIsAuthPanel] = useState(true);

  const switchPanel = (panel) => {
    setCurrentPanel(panel);
  };

  const handleDrinkCardClick = (drinkName) => {
    setSelectedDrink(drinkName);
    switchPanel("cheque");
  };

  const handleAuthPanelButtonClick = () => {
    setIsAuthPanel(false);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        // Scroll down
        window.scrollTo(0, document.body.scrollHeight);
      } else {
        // Scroll up
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      {isAuthPanel ? (
        <AuthPanel onButtonClick={handleAuthPanelButtonClick} ></AuthPanel>
      ):(
        <div className="App">
          <TimePanel switchPanel={switchPanel}></TimePanel>
          <div className="drinks-panel-wrapper">
            {currentPanel === "cheque" && <DrinkToCheque switchPanel={switchPanel} selectedDrink={selectedDrink} />}
            <DrinksPanel onDrinkCardClick={handleDrinkCardClick}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
