import React, { useState, useRef, useEffect } from 'react';
import './OtpInput.css'; 
function OtpInput({ onLogin }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleLogin = () => {
    const enteredOtp = otp.join('');
    onLogin(enteredOtp);
  };

  return (
    <div className="otp-container">
      <h2>LOGIN VIA OTP</h2>
      <div className="otp-input-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            className="otp-digit"
          />
        ))}
      </div>
      <button onClick={handleLogin} className="otp-button">LOGIN</button>
    </div>
  );
}

export default OtpInput;
