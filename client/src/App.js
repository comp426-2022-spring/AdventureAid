import logo from './logo.svg';
import './App.css';
import TestButton from './components/TestButton.jsx';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import UpdatePage from './pages/UpdatePage'
import ClickedCountry from './pages/ClickedCountry'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      
        <Route path="/" element= {<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="/country" element={<ClickedCountry />} />

      </Routes>
  </BrowserRouter>
  );
}

export default App;
