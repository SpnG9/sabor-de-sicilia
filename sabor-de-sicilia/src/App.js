// React
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import RoutesComponent from './Routes';

import './App.css';

function App() {
  return (
    <Router>
      <RoutesComponent/>
    </Router>
  )
}

export default App;
