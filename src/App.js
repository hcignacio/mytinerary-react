import React from 'react';
import './App.css';
import Container from './Components/Container/Container';
import Header from './Components/Container/Header/Header';
import ContainerCities from './Components/Container/ContainerCities/ContainerCities';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Container}></Route>
        <Route path="/cities" component={ContainerCities}></Route>
        {/* <Route path="/about" component={ContainerAbout}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;