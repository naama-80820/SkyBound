import React, { useState } from 'react';
import mission1 from "/src/assets/images/reduce/mission1.png";
import mission2 from "/src/assets/images/reduce/mission2.png";
import mission3 from "/src/assets/images/reduce/mission3.png";
import approvalIcon from "/src/assets/images/AddValue/Approval.png";
import successCharge from "/src/assets/images/reduce/successCharge.png";
import endButton from "/src/assets/images/AddValue/endButton.png";

// import security from "/src/assets/images/reduce/security.png";

import '../css/ReduceValue.css';
import "../css/AddValue.css";


const ReduceValue = () => {
  const [inputValue, setInputValue] = useState('');
  const [storedValue, setStoredValue] = useState(0);
  const [mission1Active, setMission1Active] = useState(false);
  const [mission2Active, setMission2Active] = useState(false);
  const [mission3Active, setMission3Active] = useState(false);
  
  // Function to handle end button click
  const handleEnd = () => {
    localStorage.clear();
    navigate("/login");
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    // בדיקה שהערך מכיל רק ספרות
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
    // אם הערך לא חוקי, פשוט לא מעדכנים את ה-inputValue, ולכן לא יתרחש שינוי
  };

  const handleConfirm = () => {
    setStoredValue(parseInt(inputValue || 0) + (mission1Active ? 10 : 0) + (mission2Active ? 15 : 0) + (mission3Active ? 20 : 0));
    console.log("ערך צבור אושר:", inputValue);
  };

  const handleMissionClick = (missionNumber) => {
    let newValue = storedValue;
    switch (missionNumber) {
      case 1:
        setMission1Active(!mission1Active);
        newValue = mission1Active ? storedValue - 10 : storedValue + 10;
        break;
      case 2:
        setMission2Active(!mission2Active);
        newValue = mission2Active ? storedValue - 15 : storedValue + 15;
        break;
      case 3:
        setMission3Active(!mission3Active);
        newValue = mission3Active ? storedValue - 20 : storedValue + 20;
        break;
      default:
        break;
    }
    setStoredValue(newValue);
  };

  return (
    <div className="reduce-value-container">
      <div className="reduce-value-content">
        <div className="success-charge-container">
          <img
            src={successCharge}
            alt="הטענת בהצלחה"
            className="success-charge-image"
          />
          <div className="stored-value-tag">
            {storedValue}
          </div>
        </div>
        <div className="free-charge-container">
          <img
            src="/src/assets/images/reduce/freeCharge.png"
            alt="הטענת ערך צבור חופשי"
            className="free-charge-image"
          />
          <input
            className="free-charge-input"
            onChange={handleInputChange} // שימוש בפונקציה החדשה לטיפול בשינוי קלט
            value={inputValue} // הוספנו את ה-value כדי שהקלט יהיה מבוקר
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '36px',
              textAlign: 'center',
              width: '100%',
              position: 'absolute',
              top: '50%',
              left: '28%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
        <img
          src={mission1}
          alt="משימה 1"
          className={`mission-image mission1 ${mission1Active ? 'active' : ''}`}
          onClick={() => handleMissionClick(1)}
        />
        <img
          src={mission2}
          alt="משימה 2"
          className={`mission-image mission2 ${mission2Active ? 'active' : ''}`}
          onClick={() => handleMissionClick(2)}
        />
        <img
          src={mission3}
          alt="משימה 3"
          className={`mission-image mission3 ${mission3Active ? 'active' : ''}`}
          onClick={() => handleMissionClick(3)}
        />
          {/* Approval Button */}
               <div className="approval-button" onClick={handleConfirm}>
                 <img src={approvalIcon} alt="Approval" className="approval-img" />
               </div>
      </div>
         {/* End Button (Bottom Left Corner) */}
         <div className="end-button-container" onClick={handleEnd}>
        <img src={endButton} alt="End Button" className="end-button-image" />
      </div>
    </div>
  );
};

export default ReduceValue;