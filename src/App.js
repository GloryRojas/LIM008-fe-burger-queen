import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mesero from './views/Mesero/Mesero';
import Cocinero from './views/Cocinero/Cocinero';
import Inicio from './views/Inicio/Inicio';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/" component={Inicio} />
      <Route path="/Cocinero/" component={Cocinero} />
      <Route path="/Mesero/" component={Mesero} />
    </div>
  </Router>
);

export default App;
