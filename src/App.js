import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from"react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
       <Router>
      <>
  <Header /> 
     <AppBody>
       <Sidebar />
       <Switch>
     
          <Route path="/" exact>
          {/* {chat} */}
          </Route>
        </Switch>
        </AppBody>
      </>
    </Router>
    </div>
  );
}

export default App;
const AppBody = styled.div`
display:flex;
height:100vh;
`;
