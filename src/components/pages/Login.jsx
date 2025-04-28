import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import background from "../../assets/background.png";
import confirmButton from "/src/assets/images/Login/Approval.png";
import CardInputBox from "../common/CardInputBox";
import "../css/LoginScreen.css";

export default function Login() {
  const [cardNumber, setCardNumber] = useState("");
  const navigate = useNavigate();

  const handleCardNumberChange = (value) => {
    setCardNumber(value);
  };

  const handleConfirmClick = () => {
    try {
      // Save card number to local storage
      localStorage.setItem("userCode", cardNumber);
      console.log("Card number saved:", cardNumber);
      
      // Navigate to Welcome page
      console.log("Navigating to /welcome");
      navigate("/welcome");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div
      className="screen-container"
      style={{ 
        backgroundImage: `url(${background})`,
      }}
    >
      <CardInputBox onCardNumberChange={handleCardNumberChange} value={cardNumber} />
      <button
        className="confirm-button"
        style={{ backgroundImage: `url(${confirmButton})` }}
        onClick={handleConfirmClick}
      />
    </div>
  );
}