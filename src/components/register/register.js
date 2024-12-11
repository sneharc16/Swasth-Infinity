import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api";
import { useAuth } from "../../store/auth";
import './register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    age: "",
    medicalComplications: "",
    gender: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { ...formData, medicalComplications: formData.medicalComplications.split(",") };
      const response = await registerUser(data, navigate, storetokenInLS);

      if (response?.msg) {
        setMessage(response.msg); 
      } else if (response?.error) {
        setMessage(response.error); 
      } else {
        setMessage("Unexpected response from the server.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="custom-container">
      <h2 className="custom-heading">Register</h2>
      <form className="custom-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          className="custom-input"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="middleName"
          className="custom-input"
          placeholder="Middle Name"
          value={formData.middleName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          className="custom-input"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          className="custom-input"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          className="custom-input"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="medicalComplications"
          className="custom-input"
          placeholder="Medical Complications (comma-separated)"
          value={formData.medicalComplications}
          onChange={handleChange}
        />
        <select 
          name="gender" 
          className="custom-input"
          value={formData.gender} 
          onChange={handleChange} 
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="password"
          name="password"
          className="custom-input"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="custom-button" type="submit">Register</button>
      </form>
      {message && <p className="custom-message">{typeof message === "string" ? message : JSON.stringify(message)}</p>}
    </div>
  );
};

export default Register;