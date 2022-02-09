import Signup from './Signup';
import Login from './Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './Aboutus';
import Main from './Main';
import Homepage from './Homepage';
import Chat from './Chat';
import Profile from './Profile';
import Interest from './Interest';
import NewsAPI from './NewsAPI';
import BusinessAPI from './BusinessAPI';
import SportsAPI from './SportsAPI'
import CryptoAPI from './CryptoAPI'
import MusicAPI from './MusicAPI'

function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<Aboutus/>} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/interest" element={<Interest/>} />
          <Route path="/news" element={<NewsAPI/>} />
          <Route path="/business" element={<BusinessAPI/>} />
          <Route path="/sports" element={<SportsAPI/>} />
          <Route path="/crypto" element={<CryptoAPI/>} />
          <Route path="/music" element={<MusicAPI/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
