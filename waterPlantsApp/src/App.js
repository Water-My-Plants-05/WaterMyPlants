import React from 'react';
import { Route } from "react-router-dom";
import styled from 'styled-components';

import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Plants from './components/Plants';
import AddPlant from './components/AddPlant';


const App = () => {
  return (
    <AppContainer>
      <Header/>
      <RouteContainer>
          <Route exact path="/">
            <Login />
          </Route>          
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/add-plant">
            <AddPlant />
          </Route>
          <Route path="/plants">
            <Plants />
          </Route>
          <Route path="/add-plant">
            <AddPlant />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
      </RouteContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100%;
`

const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
