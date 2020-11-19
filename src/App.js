import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.scss";
import SignIn from "./LandingPage/SignIn";
import MainPage from "./MainPage/MainPage";
import Statistics from "./Statistics/Statistics";
import SimpleBottomNavigation from "./BottonNav/BottomNav";
import "./main.scss";

function App() {
  const signedIn = localStorage.getItem("isSignedIn");
  const [isSignedIn, setIsSignedIn] = useState(signedIn ? signedIn : false);
  const setSignedInLocalStorage = (value) => {
    setIsSignedIn(value);
    localStorage.setItem("isSignedIn", value);
  };
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/main-page">
            <MainPage />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/">
            {/* wrzuca do State ale tez do local storage */}
            {/* to prawej to metoda przekazywana przez referencje - bez nawiasików i w klamrach */}
            <SignIn setIsSignedIn={setSignedInLocalStorage} />
          </Route>
        </Switch>
      </div>
      <footer>{isSignedIn && <SimpleBottomNavigation />}</footer>
    </Router>
  );
}

export default App;
