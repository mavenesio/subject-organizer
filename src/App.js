import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './pages/auth/auth';
import Main from './pages/main/main';
import SubjectsState from './context/subjects/subjectsState';
import './App.css';

function App() {
  return (
    <div className="App">
      <SubjectsState>
        <Router>
          <Switch>
            <Route path='/auth' component={Auth} />
              <Route path='/main' component={Main} />
            <Redirect to='/auth' from='*' />
          </Switch>
        </Router>
      </SubjectsState>
    </div>
  );
}

export default App;