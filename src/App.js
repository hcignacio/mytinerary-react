import React from 'react';
import './App.css';
import Container from './Components/Container/Container';
import Header from './Components/Container/Header/Header';
import ContainerCities from './Components/Container/ContainerCities/ContainerCities';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      {/* <Container /> */}

      <Switch>
        <Route exact path="/" component={Container}></Route>
        <Route path="/cities" component={ContainerCities}></Route>
      </Switch>
    </Router>
  );
}

export default App;