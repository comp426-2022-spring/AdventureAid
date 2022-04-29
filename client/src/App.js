import logo from './logo.svg';
import './App.css';
import TestButton from './components/TestButton.jsx';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="" element= {<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
  </BrowserRouter>
  );
}

export default App;
