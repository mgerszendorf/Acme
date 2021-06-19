import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./TopBar";
import Slider from "./Slider";
import Menu from "./Menu";
import "../css/App.css";
import "../css/Header.css";
import "../css/DataRangePicker.css";

function App() {
  const [burger, setBurger] = useState(false);

  function handleClickBurger() {
    setBurger(!burger);
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <section className="header">
              <TopBar handleClickBurger={handleClickBurger} />
              <Route exact path="/">
                <Slider />
              </Route>
              <Menu burger={burger} />
            </section>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
