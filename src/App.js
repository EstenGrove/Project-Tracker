import React from "react";
import "./App.scss";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import AddCardButton from "./components/AddCardButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <Card title="Admin Dashboard" />
        <AddCardButton />
      </Main>
    </div>
  );
}

export default App;
