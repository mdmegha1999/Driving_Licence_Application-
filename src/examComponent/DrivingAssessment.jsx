import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./DriAss.css"
const DrivingAssessment = () => {
  const questions =[
  {
    id: 1,
    question: 'What should you do at a stop sign?',
    options: ['Stop and proceed if clear', 'Slow down and proceed', 'Ignore the sign', 'Speed up'],
    correctAnswer: 'Stop and proceed if clear',
  },
  {
    id: 2,
    question: 'What does a yellow traffic light indicate?',
    options: ['Stop', 'Slow down', 'Proceed with caution', 'Speed up'],
    correctAnswer: 'Proceed with caution',
  },
  {
    id: 3,
    question: 'When should you use your headlights?',
    options: [
      'Only at night',
      'During bad weather conditions',
      'When you cannot see clearly for 500 feet',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
  },
  {
    id: 4,
    question: 'What is the purpose of a white rectangular sign with black lettering?',
    options: [
      'Regulatory instruction',
      'Warning about hazards or possible changes in conditions',
      'Guidance for informational purposes',
      'Destination or distance information',
    ],
    correctAnswer: 'Regulatory instruction',
  },
  {
    id: 5,
    question: 'What does a double yellow line in the center of the road indicate?',
    options: [
      'Passing is allowed if done safely',
      'No passing from either side',
      'Passing is allowed on the right side',
      'Passing is allowed on the left side',
    ],
    correctAnswer: 'No passing from either side',
  },
  {
    id: 6,
    question: 'What is the proper way to make a right turn at a red traffic light?',
    options: [
      'Come to a complete stop, yield to pedestrians and other traffic, then turn right',
      'Slow down and proceed without stopping',
      'Make the turn without checking for other traffic',
      'Turn only if no other vehicles are present',
    ],
    correctAnswer: 'Come to a complete stop, yield to pedestrians and other traffic, then turn right',
  },
  {
    id: 7,
    question: 'What is the legal blood alcohol concentration (BAC) limit for drivers in most states?',
    options: ['0.08%', '0.05%', '0.10%', '0.15%'],
    correctAnswer: '0.08%',
  },
  {
    id: 8,
    question: 'When approaching a school bus with flashing red lights and an extended stop sign, what should you do?',
    options: [
      'Slow down and proceed with caution',
      'Stop until the bus continues moving or the driver signals you to pass',
      'Honk to alert the bus driver',
      'Increase your speed to pass quickly',
    ],
    correctAnswer: 'Stop until the bus continues moving or the driver signals you to pass',
  },
  {
    id: 9,
    question: 'What should you do if you miss your exit on the freeway?',
    options: [
      'Continue to the next exit and find an alternative route',
      'Back up on the freeway to the missed exit',
      'Make a U-turn if possible',
      'Stop on the shoulder and wait for assistance',
    ],
    correctAnswer: 'Continue to the next exit and find an alternative route',
  },
  {
    id: 10,
    question: 'What is the purpose of a white diamond-shaped sign with black symbols?',
    options: [
      'Indicates an upcoming construction zone',
      'Warns of a school zone',
      'Provides information about nearby attractions',
      'Indicates a lane reserved for high-occupancy vehicles (HOV)',
    ],
    correctAnswer: 'Indicates a lane reserved for high-occupancy vehicles (HOV)',
  },
  {
    id: 11,
    question: 'When parallel parking, how far should your vehicle be from the curb?',
    options: ['No specific distance', 'Within 12 inches', 'Within 24 inches', 'Within 36 inches'],
    correctAnswer: 'Within 12 inches',
  },
  {
    id: 12,
    question: 'What does a green arrow signal indicate?',
    options: [
      'Proceed with caution in the direction of the arrow',
      'Stop and wait for a green light',
      'Turn only if the intersection is clear',
      'Do not turn in the direction of the arrow',
    ],
    correctAnswer: 'Proceed with caution in the direction of the arrow',
  },
  {
    id: 13,
    question: 'What should you do if your vehicle starts to skid?',
    options: [
      'Steer in the direction you want to go',
      'Brake as hard as possible',
      'Continue to accelerate',
      'Turn the steering wheel in the opposite direction of the skid',
    ],
    correctAnswer: 'Steer in the direction you want to go',
  },
  {
    id: 14,
    question: 'When is it legal to use a cell phone while driving?',
    options: [
      'Anytime, as long as you can multitask',
      'Only if using a hands-free device',
      'Only when stopped at a red light',
      'Only in emergencies',
    ],
    correctAnswer: 'Only if using a hands-free device',
  },
  {
    id: 15,
    question: 'What is the purpose of a round yellow sign with a black symbol?',
    options: [
      'Indicates a stop sign ahead',
      'Warns of a railroad crossing',
      'Advises to slow down and be prepared to stop',
      'Indicates a one-way street',
    ],
    correctAnswer: 'Warns of a railroad crossing',
  },
  {
    id: 16,
    question: 'What should you do if you encounter a funeral procession while driving?',
    options: [
      'Honk and proceed without stopping',
      'Yield the right-of-way and follow the lead vehicle',
      'Pass the procession quickly',
      'Ignore the procession and continue driving',
    ],
    correctAnswer: 'Yield the right-of-way and follow the lead vehicle',
  },
  {
    id: 17,
    question: 'When can you make a U-turn on a divided highway?',
    options: [
      'Only at designated U-turn locations',
      'Anytime if no other vehicles are present',
      'Only during daylight hours',
      'Only when traffic is light',
    ],
    correctAnswer: 'Only at designated U-turn locations',
  },
  {
    id: 18,
    question: 'What does a solid yellow line on your side of the center line indicate?',
    options: [
      'You can pass if the way ahead is clear',
      'No passing from either side',
      'Passing is allowed with caution',
      'Passing is allowed only during daylight hours',
    ],
    correctAnswer: 'No passing from either side',
  },
  {
    id: 19,
    question: 'What does a red octagonal sign with white letters spell out?',
    options: ['Stop', 'Yield', 'Caution', 'Speed Limit'],
    correctAnswer: 'Stop',
  },
  {
    id: 20,
    question: 'How can you reduce the risk of a collision?',
    options: [
      'Tailgating the vehicle in front of you',
      'Using your phone while driving',
      'Driving at the posted speed limit',
      'Ignoring traffic signals',
    ],
    correctAnswer: 'Driving at the posted speed limit',
  },
];
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const handleAnswerSelection = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
  };

  const handleSubmit = () => {
    calculateScore();
    navigate('/results', { state: { score, questions, userAnswers } }); 
  };

  return (
    <div>
      <h1>Driving Assessment</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <p className='mcq_qus'>Question{question.id}:{question.text}</p>
          <ul>
            {question.options.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={option}
                    onChange={() => handleAnswerSelection(question.id, option)}
                    checked={userAnswers[question.id] === option}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DrivingAssessment;
