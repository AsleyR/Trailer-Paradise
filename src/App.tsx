import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import ErrorPage from './Pages/ErrorPage';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/log-in" element={<LogIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
