import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './components/sidebar'
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
