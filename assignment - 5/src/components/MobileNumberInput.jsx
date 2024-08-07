import React, { useState, useEffect } from "react";
import "./MobileNumberInput.css";

function MobileNumberInput({ onSentOtp }) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");

  function validate(number) {
    const phoneNumber = /^[0-9]{10}$/;
    return phoneNumber.test(number);

    /*
      const validatePhoneNumber = (number) => {
    // Check if the number has exactly 10 characters
    if (number.length !== 10) {
      return false;
    }
    // Convert the string to an array of characters and check if all are digits
    return Array.from(number).every(char => char >= '0' && char <= '9');
    */
  }

  function handleSendOtp() {
    if (validate(mobileNumber)) {
      setError("");
      onSentOtp();
    } else {
      setError("Please enter a valid 10-digit phone number.");
    }
  }

  return (
    <div className="otp-container">
      <input
        className="otp-input"
        type="text"
        placeholder="ENTER MOBILE NUMBER"
        onChange={(e) => {
          setMobileNumber(e.target.value);
        }}
        value={mobileNumber}
      />
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      <button onClick={handleSendOtp} className="otp-button">SEND OTP</button>
    </div>
  );
}

export default MobileNumberInput;
