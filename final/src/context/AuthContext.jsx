import { createContext, useState, useContext, useEffect } from "react";
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState([]);
    const [username,setUsername] = useState('')
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("access");
        const response = await fetch('http://127.0.0.1:8000/api/check', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.token === true) {

      
          setUsername(data.username)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
        fetchData();
      }, []);

    return (
        <AuthContext.Provider value={{ username }}>
            {children}
        </AuthContext.Provider>
    );
}
