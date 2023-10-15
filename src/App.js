import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ResumePage from './ResumePage';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/resume" component={ResumePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;