import { User } from "../types/User";
import useFlashMessage from "../hooks/useFlashMessage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const baseURL = "http://localhost:3000";

const useAuth = () =>{
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const navigate = useNavigate()
    const registerUser = async (user: User | {}) => {
        const { setFlashMessage } = useFlashMessage();
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
          const ok = response.ok;
          console.log(ok);
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
    return {registerUser,isAuthenticated}
}

export default useAuth
