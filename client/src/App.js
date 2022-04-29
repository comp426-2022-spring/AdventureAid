import logo from './logo.svg';
import './App.css';
import TestButton from './components/TestButton.jsx';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="" element= {<h1>home</h1>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
  </BrowserRouter>
  );
}

export default App;
