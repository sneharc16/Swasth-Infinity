import React, { useState } from "react";
import { registerAdmin } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

const AdminRegister = () => {
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    fitnessCenterName: "",
    fitnessCenterAddress: "",
  });

  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerAdmin(adminData, navigate, storetokenInLS);
    if (response.error) {
      alert(response.message);
    }
  };

  return (
    <div>
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={adminData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={adminData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={adminData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="number"
          placeholder="number"
          value={adminData.number}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="fitnessCenterName"
          placeholder="fitnessCenterName"
          value={adminData.fitnessCenterName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="fitnessCenterAddress"
          placeholder="fitnessCenterAddress"
          value={adminData.fitnessCenterAddress}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminRegister;
