import React , {useState , useMemo}from 'react';
import UserNavBar from './shared/components/Navigation/UserNavbar';
import GuestNavbar from './shared/components/Navigation/QuestNavbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Offers from './offres/pages/Offers.jsx';
import Hello from './testALA/helo';
import OfferDetails from './offres/pages/OfferDetails';
import Bye from './testALA/bye';
import SignUpPage from './auth/signup/authpage';
import InvitPage from './auth/invitpage/invitpage';

import SigninPage from './auth/signin/signinpage';

import { UserContext } from "../src/shared/context/AuthContext";

 

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <UserContext.Provider value={value}>
    <Router>
      {
        user? <UserNavBar/> : <GuestNavbar/>
      }
      
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/:_id" element={<OfferDetails />} />
        <Route path="/by" element={<Bye/>} />
        <Route path="/auth" element={<SigninPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/invitpage" element={<InvitPage />} />
      </Routes>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
