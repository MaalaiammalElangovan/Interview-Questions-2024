import "./styles.css";
import React, { useState } from 'react';


export default function App() {
  const [numDigits, setNumDigits] = useState(4); // Default to 4 digits
  const [otp, setOtp] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && parseInt(value) >= 4 && parseInt(value) <= 10) {
      // Validate input to be a number between 4 and 10
      setNumDigits(parseInt(value));
      setOtp(generateOtp(parseInt(value)));
    }
  };

  const generateOtp = (length) => {
    let otp = '';
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10); // Generate random digits
    }
    return otp;
  };

  return (
    <div>
      <h1>OTP Generator</h1>
      <label htmlFor="numDigits">Number of Digits:</label>
      <input
        type="number"
        id="numDigits"
        value={numDigits}
        onChange={handleInputChange}
        min="4"
        max="8"
      />
      <br />
      <label>Generated OTP:</label>
      <p>{otp}</p>
    </div>
  );
}