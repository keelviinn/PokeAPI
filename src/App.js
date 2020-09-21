import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';

import Navbar from './components/Navbar';
import GlobalStyles from './styles/global';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
