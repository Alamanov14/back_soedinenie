import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const authContext = createContext();
export const useAuth = () => useContext(authContext);
export const API = "http://34.173.115.25/api/v1";

const AuthContextProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleRegister = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/register/`, formData);
      console.log(res);
      navigate("/register-succses");
    } catch (error) {
      setError(Object.values(error.response.data).flat()[0]);
    } finally {
      setLoading(false);
    }
    console.log(error);
  };

  const handleLogin = async (formData, email) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setUser(email);
      navigate("/");
    } catch (error) {
      setError(error.response.data.detail);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setUser(null);
    navigate("/login");
  };

  const checkAuth = async () => {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.accsess}`;
      const config = {
        heders: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/account/token/refresh/`, {
        refresh: tokens.refresh,
        config,
      });
      localStorage.setItem(
        "tokens",
        JSON.stringify({ access: res.data.access, refresh: tokens.refresh })
      );

      const email = localStorage.getItem("email");
      setUser(email);
      console.log(res);
    } catch (error) {
      handleLogout();
    } finally {
      setLoading(false);
    }
  };

  const values = {
    checkAuth,
    handleLogout,
    handleRegister,
    handleLogin,
    loading,
    error,
    setError,
    user,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvaider;
