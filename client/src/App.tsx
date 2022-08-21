import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import ErrorPage from './pages/ErrorPage';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import LogIn from './pages/Login';
import Profile from './pages/Profile';
import Search from './pages/Search';
import SignUp from './pages/SignUp';
import Trailer from './pages/Trailer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/trailer' element={<Search/>}/>
        <Route path='/trailer/:trailerId' element={<Trailer />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/log-in" element={<LogIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/profile/:userId" element={<Profile />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
