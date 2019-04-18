import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mesero from './components/Mesero';
import Cocinero from './components/Cocinero';
import Header from './components/Header';
import Inicio from './components/Inicio';

const App = () => (
  <Router>
    <div>
      
      <Route exact path="/" component={Inicio} />
      <Route path="/Cocinero" component={Cocinero} />
      <Route path="/Mesero" component={Mesero} />
    </div>
  </Router>
);

export default App;
