import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Switch, Route } from 'react-router-dom';
import logo from './logo-rf.png';
import './App.css';

/**
 * containers
 */
import { Home, SyncForm, SubmitForm, FieldLevelForm } from 'containers';

const NavBar = styled.div`
  mairgin-bottom: 16px;
  padding-bottom: 8px;
  background-color: #222222;

  > * {
    display: inline-block;
    margin-right: 8px;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Redux-Form demo by
            <a href="https://github.com/xJkit" target="_blank" rel="noopener noreferrer">@xJkit</a>
          </h1>
        </header>
        <div className="App-intro">
        <NavBar>
          <Link className="border" to="/">Home</Link>
          <Link className="border" to="/sync-validation-form">SyncForm</Link>
          <Link className="border" to="/field-level-validation-form">Field-level Form</Link>
          <Link className="border" to="/submit-validation-form">SubmitForm</Link>
        </NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sync-validation-form" component={SyncForm} />
          <Route path="/field-level-validation-form" component={FieldLevelForm} />
          <Route path="/submit-validation-form" component={SubmitForm} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
