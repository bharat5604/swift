import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Concept from './Component/Concept';
import LiveClasses from './Component/LiveClasses';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Concept />
            <LiveClasses />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
