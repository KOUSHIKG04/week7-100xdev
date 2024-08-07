import { useState } from "react";
import MobileNumberInput from "./components/MobileNumberInput";
import OtpInput from "./components/OtpInput";
import "./App.css";

function App() {
  const [showOtp, setShowOtp] = useState(false);
  function handleSendOtp() {
    setShowOtp(true);
  }

  function handleLogin(otp) {
    console.log(otp);
    
  }

  return (
    <div className="App">
      {showOtp ? (
        <OtpInput onLogin={handleLogin} />
      ) : (
        <MobileNumberInput onSentOtp={handleSendOtp} />
      )}
    </div>
  );
}

export default App;
