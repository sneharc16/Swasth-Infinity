import React, { useEffect, useState } from "react";
import { fetchFitnessCenterUsers, addFitnessCenterUser } from "../../services/api";
import { useAuth } from "../../store/auth";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  const { token, logout, admin } = useAuth();
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    mobileNumber: "",
    dob: "",
    joiningDate: "",
    paymentMonths: "",
  });

  useEffect(() => {
    if (admin) {
      fetchFitnessCenterUsers(token)
        .then(setUsers)
        .catch((error) => console.error("Error fetching users:", error));
    }
  }, [admin, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await addFitnessCenterUser(newUser, token);
      alert("User added successfully!");
      setNewUser({ name: "", age: "", mobileNumber: "", dob: "", joiningDate: "", paymentMonths: "" });
      fetchFitnessCenterUsers(token).then(setUsers);
    } catch (error) {
      alert("Failed to add user");
    }
  };

  return (
    <div className={styles["admin-dashboard-container"]}>
      <div className={styles["admin-dashboard-header"]}>
        <h1>Welcome, Admin {admin?.name}</h1>
        <button onClick={logout}>Logout</button>
      </div>

      <div className={styles["admin-dashboard-users"]}>
        <h2>Registered Users</h2>
        <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Mobile Number</th>
        <th>Age</th>
        <th>DOB</th>
        <th>Joining Date</th>
        <th>Payment Months</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.mobileNumber}</td>
          <td>{user.age}</td>
          <td>{user.dob}</td>
          <td>{user.joiningDate}</td>
          <td>{user.paymentMonths}</td>
        </tr>
      ))}
    </tbody>
  </table>
      </div>

      <div className={styles["admin-dashboard-form"]}>
        <h2>Add New User</h2>
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={newUser.age}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={newUser.mobileNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="dob"
            value={newUser.dob}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="joiningDate"
            value={newUser.joiningDate}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="paymentMonths"
            placeholder="Payment Months"
            value={newUser.paymentMonths}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
