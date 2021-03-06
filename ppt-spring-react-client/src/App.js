import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import AddProject from "./components/AddProject/AddProject";
import UpdateProject from "./components/UpdateProject/UpdateProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
          <Route exact path="/updateProject/:id" component={UpdateProject} />
          <Redirect to="/dashboard" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
