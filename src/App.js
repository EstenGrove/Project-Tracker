import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { GlobalStateProvider } from "./context/GlobalStateProvider";

function App() {
  return (
    <Router>
      <GlobalStateProvider>
        <div className="App">
          <Navbar />
          <Main>
            <Switch>
              <Route exact path="/" component={ProjectsPage} />
            </Switch>
          </Main>
        </div>
      </GlobalStateProvider>
    </Router>
  );
}

export default App;
