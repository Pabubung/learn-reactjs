import React from "react";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/HomePage/Home";
import "./App.css";
import Footer from "./containers/Footer/Footer";
import Login from "./containers/Login/Login";

function App() {
  return (
    // <Login/>
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
