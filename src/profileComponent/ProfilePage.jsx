import React, { useState } from 'react';
import './profile.css'; 
import { Link } from 'react-router-dom'; 

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const res = await fetch('/profile',{
      method:'PUT',
      eaders: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // email
      })
    })
    const data = res.json();
    // console.log(data, "data");
    
  };

  const steps = [
    "Study the Rules and Regulations: Familiarize yourself with the traffic rules and regulations in your area. Understanding the rules of the road is crucial for safe driving.",
    "Take a Driver's Education Course: Consider taking a driver's education course, especially if it's a requirement in your region. These courses often cover both theoretical and practical aspects of driving.",
    "Practice Regularly: Practice is key to becoming a skilled and confident driver. Spend time behind the wheel in various conditions to improve your driving skills.",
    "Learn Defensive Driving: Defensive driving involves being aware of your surroundings, anticipating potential hazards, and taking steps to prevent accidents. This mindset can make you a safer driver.",
    "Follow Traffic Etiquette: Respect other drivers on the road. Follow proper signaling, observe speed limits, and be courteous to fellow drivers.",
    "Prepare for the Written Test: If there's a written test as part of the licensing process, study the driver's handbook and take practice tests to ensure you understand the theoretical aspects of driving.",
    "Be Patient and Stay Calm: The driving test can be nerve-wracking, but it's important to stay calm and focused. Follow the instructions given by the examiner and demonstrate your driving skills confidently.",
    "Understand Vehicle Maintenance: Knowing basic vehicle maintenance is beneficial. Familiarize yourself with tasks like checking oil levels, tire pressure, and other routine maintenance.",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  return (
    <div className="profile-container">
      <div>
        <h1 className="welcome-message">Hi! , Welcome</h1>
        <div className="user-info">
          <h5>Megha Digarse</h5>
          <h6>6261392766</h6>
          <button onClick={() => setIsEditing(true)}>Update Profile</button>
        </div>
        <Link to="/">
        <button>Log Out</button>
      </Link>{" "}
      </div>
      <div className='imp-pra'>
      {currentStep < steps.length ? (
        <div>
          <p>{steps[currentStep]}</p>
          <button className='next_button' onClick={handleNextStep}>Next Step</button>
        </div>
      ) : (
        <p className='congrats-message'>Congratulations! You've completed all the steps.</p>
      )}
      
      </div>

      <div>
        {isEditing && (
          <form className="profile-form" onSubmit={handleUpdateProfile}>
            {/* Add input fields for updating profile information */}
            {/* <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> */}
            <button type="submit">Save Changes</button>
          </form>
        )}

        <div className="exam-button">
        <Link to="/driving-assessment">
        <button>Exam</button>
      </Link>        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
