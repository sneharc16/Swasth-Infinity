import { createContext, useContext, useEffect, useState } from "react";

const isLocal = window.location.hostname === 'localhost';
const baseUrl = isLocal ? 'http://localhost:5000' : 'https://sih24-backend.onrender.com';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const storetokenInLS = (serverToken) => {
        return localStorage.setItem('token', serverToken);
    };


    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");

    let isLoggedIN = !!token;

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }


     const userAuthentication = async () => {
        try {
            console.log("logging")
            const response = await fetch(`${baseUrl}/api/auth/user`,{
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);

            if(response.ok){
                const data = await response.json();
                console.log("user data",data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.error("Error at frontent jwt authorization");
        }
     }

    useEffect(() => {
        userAuthentication();
    }, []);


    return (<AuthContext.Provider value={{ isLoggedIN, storetokenInLS, LogoutUser, user   }}>
        {children}
    </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside the Provider");
    }
    return authContextValue;
}