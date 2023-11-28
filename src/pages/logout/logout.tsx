import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('sessionToken');
    navigate('/landing');
  }, [navigate]);

  return (
    <div>logout</div>
  );
};

export default Logout;
