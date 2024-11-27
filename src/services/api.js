const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/auth' : 'https://sih24-backend.onrender.com/api/auth';
const API_BASE_URL_ADMIN = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/admin' : 'https://sih24-backend.onrender.com/api/admin';

export const registerUser = async (userData,navigate,storetokenInLS) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
  
    const res_data = await response.json();
    if(response.ok){
      storetokenInLS(res_data.token);
      alert("Welcome to Swasthnfinity");
      navigate("/login");
      return res_data;
    }else{
      return { error:true, message:res_data.message || "Registration failed"};
    }
    
  } catch (error) {
    console.error("Error in RegisterUser:", error.message);
    return { error: true, message: error.message || "Network error in Registration" };
  }
};

// Admin Registration
export const registerAdmin = async (adminData, navigate, storetokenInLS) => {
  try {
    const response = await fetch(`${API_BASE_URL_ADMIN}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminData),
    });

    const res_data = await response.json();
    console.log(response);
    if (response.ok) {
      storetokenInLS(res_data.token);
      alert("Admin Registered Successfully");
      navigate("/adminlogin"); 
      return res_data;
    } else {
      return { error: true, message: res_data.message || "Admin registration failed" };
    }
  } catch (error) {
    console.error("Error in registerAdmin:", error.message);
    return { error: true, message: error.message || "Network error during admin registration" };
  }
};



export const loginUser = async (credentials,navigate,storetokenInLS) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }
  );

  const res_data = await response.json();
  if(response.ok){
    storetokenInLS(res_data.token);
    alert("Login Successfully");
    navigate("/");
    return res_data;
  }else{
    return { error:true, message:res_data.message || "Login failed"};
  }

  } catch (error) {
    console.error("Error in loginUser:", error.message);
    return { error: true, message: error.message || "Network error" };
  }
};

export const loginAdmin = async (credentials, navigate, storeTokenInLS) => {
  try {
    const response = await fetch(`${API_BASE_URL_ADMIN}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
  
    const res_data = await response.json();
    if (response.ok) {
      storeTokenInLS(res_data.token);
      alert("Admin Login Successful");
      navigate("/");
      return res_data;
    } else {
      return { error: true, message: res_data.message || "Admin login failed" };
    }
  } catch (error) {
    console.error("Error in loginAdmin:", error.message);
    return { error: true, message: error.message || "Network error" };
  }
};

// Fetch Fitness Center Users
export const fetchFitnessCenterUsers = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL_ADMIN}/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.ok ? await response.json() : { error: true, message: "Failed to fetch users" };
  } catch (error) {
    console.error("Error in fetchFitnessCenterUsers:", error.message);
    return { error: true, message: error.message || "Network error" };
  }
};

// Add Fitness Center User
export const addFitnessCenterUser = async (userData, token) => {
  try {
    const response = await fetch(`${API_BASE_URL_ADMIN}/add-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
    return response.ok ? await response.json() : { error: true, message: "Failed to add user" };
  } catch (error) {
    console.error("Error in addFitnessCenterUser:", error.message);
    return { error: true, message: error.message || "Network error" };
  }
};