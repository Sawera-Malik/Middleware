import React from 'react';
import { useNavigate } from 'react-router-dom';


function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
      <button onClick={handleGoHome} className="not-found-button">
        Go Back to Home
      </button>
    </div>
  );
}

export default NotFound;
