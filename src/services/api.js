const API_BASE_URL = "https://sih24-backend.onrender.com/api/auth";

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


