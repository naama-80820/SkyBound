import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import welcomeHeader from "/src/assets/images/Wellcome/wellcome.png";
import flightButton from "/src/assets/images/Wellcome/add.png";
import transitButton from "/src/assets/images/Wellcome/reduce.png";
import questionText from "/src/assets/images/Wellcome/options.png";
import '../css/Wellcome.css';

const Wellcome = () => {
  const [cardNumber, setCardNumber] = useState('');

  useEffect(() => {
    const storedCardNumber = localStorage.getItem('cardNumber');
    if (storedCardNumber) {
      setCardNumber(storedCardNumber);
    }
  }, []);

  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <img src={welcomeHeader} alt="ברוכה הבאה" />
      </div>
      <div className="question-text">
        <img src={questionText} alt="אלו פעולות תרצי לבצע?" />
      </div>
      {cardNumber && (
        <div className="card-number-on-lines"> {/* שינוי כאן - הוספת קלאס חדש */}
          <p>{cardNumber}</p> {/* שימו לב שהסרתי את הטקסט הקבוע כדי שהמספר ישב ישירות על הקו */}
        </div>
      )}
      <div className="welcome-buttons">
        <Link to="/add-value" className="flight-button-link">
          <button className="flight-button">
            <img src={transitButton} alt="תיקוף דמי טיסה" />
          </button>
        </Link>

        <Link to="/reduce-value" className="transit-button-link">
          <button className="transit-button">
            <img src={flightButton} alt="טעינת ערך צבור" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Wellcome;