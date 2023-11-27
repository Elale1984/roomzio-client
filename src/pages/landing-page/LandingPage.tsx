// LandingPage.tsx
import React, { useState, useRef } from 'react';
import axiosInstance from '../../api/AxiosConfig';
import { handleLogin } from '../../auth/authUtils';
import { LOGIN_ENDPOINT } from '../../api/apiEndpoints';
import { validateUsername, validatePassword } from '../../utils/formUtils';
import welcomeImage from '../../assets/img/welcome-page.png';
import './LandingPage.css'

const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const errRef = useRef<HTMLParagraphElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const isUsernameValid = validateUsername(formData.username);
    const isPasswordValid = validatePassword(formData.password);
    console.log(isPasswordValid + " " + isUsernameValid);
    if (!isUsernameValid || !isPasswordValid) {
      setError('Invalid input. Please check your username and password.');
      return;
    }

    try {
      // Use axiosInstance and LOGIN_ENDPOINT in handleLogin function
      const userData = await handleLogin(axiosInstance, LOGIN_ENDPOINT, formData.username, formData.password);
      console.log('Logged in user:', userData);
      const token: string = userData.authentication.sessionToken;
      console.log(token);
      localStorage.setItem('sessionToken', token);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      {success ? (
        <section>
          <p className="success-login">Welcome Back!</p>
        </section>
      ) : (
        <section>
          <div className="landingPage-container">
            <div className="landingPage-container-left">
              <img
                className="welcome-image"
                src={welcomeImage}
                alt="Welcome to RoomzIO"
              />
            </div>
            <div className="landingPage-container-right">
              <p
                ref={errRef}
                className={error ? "errMsg" : "offscreen"}
                aria-live="assertive"
              >
                {error}
              </p>

              <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  autoComplete="off"
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  value={formData.username}
                  required
                />
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  autoComplete='new-password'
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  value={formData.password}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LandingPage;
