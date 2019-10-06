import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import AddCardButton from "./components/AddCardButton";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Main>
          <Route exact path="/" component={ProjectsPage} />
        </Main>
      </div>
    </Router>
  );
}

export default App;
