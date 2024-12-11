// React Component
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/api";
import { useAuth } from "../../store/auth";
import "./login.css";

const CustomLogin = () => {
  const [customCredentials, setCustomCredentials] = useState({ email: "", password: "" });
  const [customMessage, setCustomMessage] = useState("");
  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const handleCustomChange = (e) => {
    setCustomCredentials({ ...customCredentials, [e.target.name]: e.target.value });
  };

  const handleCustomSubmit = async (e) => {
    e.preventDefault();
    const res_data = await loginUser(customCredentials, navigate, storetokenInLS);
    setCustomMessage(res_data.message || "An error occurred");
    if (res_data.error) {
      setCustomMessage(res_data.message || "An error occurred");
    } else {
      setCustomMessage("Login successful!");
    }
  };

  return (
    <div className="custom-container">
      <h2 className="custom-heading">Login</h2>
      <form className="custom-form" onSubmit={handleCustomSubmit}>
        <input
          className="custom-input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleCustomChange}
          required
        />
        <input
          className="custom-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleCustomChange}
          required
        />
        <button className="custom-button" type="submit">
          Login
        </button>
      </form>
      {customMessage && <p className="custom-message">{customMessage}</p>}
    </div>
  );
};

export default CustomLogin;
