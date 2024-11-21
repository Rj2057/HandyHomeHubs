import React, { useState } from 'react';
import './forget.css';

export default function ResetPasswordForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // If passwords match, proceed with reset
      setErrorMessage(''); // Clear any previous error
      alert('Password reset successfully!'); // Replace with actual reset logic
    } else {
      // If passwords don’t match, show error message
      setErrorMessage('Passwords do not match. Please try again.');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleReset}>
        <h1>Reset Password</h1>
        
        <div className="input-box">
          <input
            type="password"
            placeholder="Enter New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Re-enter New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {/* Display error message if passwords do not match */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="reset-button">Reset Now</button>
      </form>
    </div>
  );
}
