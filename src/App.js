import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Switch, Route } from 'react-router-dom';
import logo from './logo-rf.png';
import './App.css';

/**
 * containers
 */
import { Home, SyncForm, SubmitForm } from 'containers';

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
          <Link to="/">Home</Link>
          <Link to="/sync-form">SyncForm</Link>
          <Link to="/submit-form">SubmitForm</Link>
        </NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sync-form" component={SyncForm} />
          <Route path="/submit-form" component={SubmitForm} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
