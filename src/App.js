import './App.css';
import React from 'react';
import LoginPage from './loginComponent/LoginPage';
import ProfilePage from './profileComponent/ProfilePage';
import LogIn from './loginComponent/LogIn';
import DrivingAssessment from './examComponent/DrivingAssessment.jsx';
import { Route, Routes } from 'react-router-dom';
import Results from './examComponent/Results';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/driving-assessment" element={<DrivingAssessment />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}
export default App;
