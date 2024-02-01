import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrivingAssessment from './DrivingAssessment';
import Results from './Results';

const FinalExamApi = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DrivingAssessment />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default FinalExamApi;
