import React from "react";
import inputBox from "../../assets/images/Login/LoginCard.png";
import "../css/LoginScreen.css";

export default function CardInputBox({ onCardNumberChange, value }) {
  const handleInputChange = (e) => {
    // Allow only numbers, no 'e' or other characters
    const newValue = e.target.value.replace(/[^0-9]/g, '');
    
    // Enforce maxLength by truncating if needed
    const truncatedValue = newValue.slice(0, 10);
    
    onCardNumberChange(truncatedValue);
  };

  const handleKeyDown = (e) => {
    // Prevent 'e', '+', '-' from being entered
    if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-') {
      e.preventDefault();
    }
  };

  return (
    <div
      className="card-input-box"
      style={{ backgroundImage: `url(${inputBox})` }}
    >
      <input
        className="card-number-input"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength="10"
        autoComplete="off"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}