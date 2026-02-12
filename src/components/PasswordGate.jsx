import React, { useState, useEffect } from 'react';
import '../styles/PasswordGate.css';

const PasswordGate = ({ children }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const CORRECT_PASSWORD = 'GiriRanju143';

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    setPassword('');
  };

  if (isAuthenticated) {
    return (
      <React.Fragment>
        {children}
        
      </React.Fragment>
    );
  }

  return (
    <div className="password-gate">
      <div className="password-overlay"></div>
      <div className={`password-card ${isShaking ? 'shake' : ''}`}>
        <div className="password-icon">Lock</div>
        <h1 className="password-title">Welcome</h1>
        <p className="password-subtitle">Please enter the password to continue</p>
        
        <form onSubmit={handleSubmit} className="password-form">
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="password-input"
              autoFocus
            />
          </div>
          
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          <button type="submit" className="password-submit">
            Enter
          </button>
        </form>
        
        <div className="password-footer">
          <p className="password-hint">Sacred Journey Awaits</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;