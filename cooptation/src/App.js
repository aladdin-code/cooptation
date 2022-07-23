import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
   
} from 'react-router-dom';
import Offers from './offres/pages/Offers';
import Hello from './testALA/helo';

function App() {
  return (
   <Router>
<Routes>
<Route path="/" element={<Hello />} />
<Route path="/offers" element={<Offers />} />
</Routes>
   </Router>
  );
}

export default App;
