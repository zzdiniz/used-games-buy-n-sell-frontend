import { User } from "../types/User";
import useFlashMessage from "../hooks/useFlashMessage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const baseURL = "http://localhost:3000";

const useAuth = () =>{
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const navigate = useNavigate()
    const { setFlashMessage } = useFlashMessage();
    useEffect(()=>{
      const token = localStorage.getItem('token')
      if(token){
        setIsAuthenticated(true)
      }
    },[])
    const registerUser = async (user: User | {}) => {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        };
        try {
          const response = await fetch(`${baseURL}/users/register`, requestOptions);
          const data = await response.json();
          setFlashMessage(
            response.ok ? "Registration completed successfully" : data.message,
            response.ok ? "success" : "error"
          );
          if(response.ok){
            authUser(data)
            navigate('/')
          }
        } catch (error) {
          console.log(error);
        }
      };

    const authUser = async (data:{message:string,token:string}) =>  {
        setIsAuthenticated(true)
        localStorage.setItem('token',data.token)
    }

    const logout = () => {
      setIsAuthenticated(false)
      localStorage.removeItem('token')
      setFlashMessage('Successfully logged out','success')
      navigate('/')
    }
    
    const login = async (user: User | {}) =>{
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      try {
        const response = await fetch(`${baseURL}/users/login`, requestOptions);
        const data = await response.json();
        setFlashMessage(
          response.ok ? "Successfully logged in" : data.message,
          response.ok ? "success" : "error"
        );
        if(response.ok){
          authUser(data)
          navigate('/')
        }
      } catch (error) {
        console.log(error);
      }
    }
    return {registerUser,isAuthenticated,logout,login}
}

export default useAuth
