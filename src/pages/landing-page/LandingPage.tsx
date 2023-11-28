// LandingPage.tsx
import React, { useState, useRef } from "react";
import axiosInstance from "../../api/AxiosConfig";
import { handleLogin } from "../../auth/authUtils";
import { LOGIN_ENDPOINT } from "../../api/apiEndpoints";
import { validateUsername, validatePassword } from "../../utils/formUtils";
import welcomeImage from "../../assets/img/welcome-page.png";
import "./LandingPage.css";
import {useNavigate} from "react-router-dom";

const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const errRef = useRef<HTMLParagraphElement | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const isUsernameValid = validateUsername(formData.username);
    const isPasswordValid = validatePassword(formData.password);
    console.log(isPasswordValid + " " + isUsernameValid);
    if (!isUsernameValid || !isPasswordValid) {
      setError("Invalid input. Please check your username and password.");
      return;
    }

    try {
      await handleLogin(
        axiosInstance,
        LOGIN_ENDPOINT,
        formData.username,
        formData.password
      );

      navigate('/dashboard/organization');

    } catch (err) {
      console.error(err);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
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
          <form className="form-container" onSubmit={handleSubmit}>
            <input
            className="form-control"
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              placeholder="Username"
              value={formData.username}
              required
            />
            <input
              className="form-control"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Password"
              value={formData.password}
              required
            />
            <button className="btn-form-control" type="submit">Sign In</button>
            <p>New to RoomzIO?</p>
            <span><a href="/register">Register New Account</a></span>
          </form>
      
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
