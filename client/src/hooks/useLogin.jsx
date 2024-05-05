import React from 'react'
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "../config/axiosConfig";

export const useLogin = () => {

    const { login } = useAuthContext();
    const [loginError, setLoginError] = useState(null)
    const [isLoginLoading, setIsLoginLoading] = useState(null)


    const logmein = async (email, userType, password) =>{
        setIsLoginLoading(true);
        setLoginError(null)        

        try {
            const response = await axios.post("/auth/login", {               
                email: email,
                usertype: userType,
                password: password,
            });

            const json = await response.data;

            if (response.status === 200) {
                // Save token to local storage
                console.log('Log IN Successful from backend!!');
                localStorage.setItem("user", JSON.stringify(json));
                login(JSON.stringify(json)); 
                setIsLoginLoading(false)
            } else {
                setIsLoginLoading(false);
                setLoginError('Log In Failed! Try Again',json.error);
            }
        } catch (error) {            
            setLoginError("Signup failed. Please try again.",error);
        } finally {
            setIsLoginLoading(false);
        }
    }

    return {logmein, isLoginLoading, loginError}
  
}

