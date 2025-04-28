import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/AddValue.css";
import validationTextbox from "/src/assets/images/AddValue/validationTextbox.png";
import approvalIcon from "/src/assets/images/AddValue/Approval.png";
import background from "/src/assets/images/background.png";
import successImage from "/src/assets/images/AddValue/successvalidationalidation.png";
import endButton from "/src/assets/images/AddValue/endButton.png";
import approvalSound from "/src/assets/sounds/beep-07a.mp3"; 

export default function AddValue() {
  const [amount, setAmount] = useState(0);
  const [approvedAmount, setApprovedAmount] = useState(null);
  const navigate = useNavigate();

  // Function to handle approval button click
  const handleApproval = () => {
    setApprovedAmount(amount);

    // Play sound after 1 second
    setTimeout(() => {
      const audio = new Audio(approvalSound);
      audio.play();
    }, 500);
  };

  // Function to handle end button click
  const handleEnd = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${background})` }}>
      <div className="image-container">
        <img src={validationTextbox} alt="Validation Box" className="validation-image" />
        
        <input
  type="number"
  value={amount}
  onChange={(e) => {
    // Prevent non-numeric characters including 'e'
    const value = e.target.value.replace(/[eE+-]/g, '');
    
    // Enforce max value
    const numValue = Number(value);
    if (numValue > 10000) {
      setAmount(amount);
    } else {
      setAmount(value);
    }
  }}
  className="approval-input"
  min={0}
  max={10000}
  onKeyDown={(e) => {
    // Prevent 'e' character from being entered
    if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-') {
      e.preventDefault();
    }
  }}
/>
        
        {/* Approval Button */}
        <div className="approval-container" onClick={handleApproval}>
          <img src={approvalIcon} alt="Approval" className="approval-image" />
        </div>
        
        {/* Success Image with Text Overlay */}
        <div className="success-container">
          <img src={successImage} alt="Success" className="success-image" />
          {approvedAmount !== null && (
            <div className="success-text">{approvedAmount}</div>
          )}
        </div>
      </div>

      {/* End Button (Bottom Left Corner) */}
      <div className="end-button-container" onClick={handleEnd}>
        <img src={endButton} alt="End Button" className="end-button-image" />
      </div>
    </div>
  );
}
