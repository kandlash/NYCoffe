import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import './css/app.css';
import DrinksPanel from './jsx/DrinksPanel';
import TimePanel from './jsx/TimePanel';
import DrinkToCheque from "./jsx/DrinkToCheque";
import AuthPanel from "./jsx/AuthPanel";
import SideBarMenu from "./jsx/SideBarMenu";

function App() {
  const [currentMainPanel, setCurrentMainPanel] = useState("timepanel")
  const [currentPanel, setCurrentPanel] = useState("drinks");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [isAuthPanel, setIsAuthPanel] = useState(true);
  const [currentAuthPanel, setCurrentAuthPanel] = useState("activationpanel");
  const [isSideBarMenuOpen, setSideBarMenuOpen] = useState(false);

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

  const handleOnCloseSidebarClick = () => {
    setSideBarMenuOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        {isAuthPanel ? (
          <AuthPanel onButtonClick={handleAuthPanelButtonClick} ></AuthPanel>
        ) : (

          <div className="App">
            {currentMainPanel !== "drinks" && (
              <div className="navigation-panel">
                <div className="nav-elements-wrapper">
                  <div className="menu-button-container">
                    <button onClick={() => setSideBarMenuOpen(true)} className="menu-button">≡</button>
                  </div>
                  <div className="panel-name">
                    Заказы
                  </div>
                </div>
              </div>

            )}
            {isSideBarMenuOpen && <SideBarMenu onCloseClick={handleOnCloseSidebarClick}></SideBarMenu>}
            {currentMainPanel === "timepanel" && (
              <>
                <TimePanel switchPanel={switchPanel}></TimePanel>
                <div className="nav-button-down-container">
                  <button onClick={() => setCurrentMainPanel("drinks")} className="nav-button-down">down</button>
                </div>
              </>

            )}
            {currentMainPanel === "drinks" && (
              <div className="drinks-panel-wrapper">
                {currentPanel === "cheque" && <DrinkToCheque switchPanel={switchPanel} selectedDrink={selectedDrink} />}
                <DrinksPanel onDrinkCardClick={handleDrinkCardClick} />
                <div className="nav-button-up-container">
                  <button onClick={() => setCurrentMainPanel("timepanel")} className="nav-button-up">up</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </BrowserRouter>

  );
}

export default App;
