import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Projects from './components/Projects';
import ProjectProgress from './components/ProjectProgress';
import Complaints from './components/Complaints';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id/progress" component={ProjectProgress} />
        <Route exact path="/projects/:id/complaints" component={Complaints} />
      </Switch>
    </Router>
  );
}

export default App;
