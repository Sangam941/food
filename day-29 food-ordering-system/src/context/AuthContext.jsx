import { useEffect, useState } from "react";
import api from "../utils/axios";
import { AuthContextProvider } from "./AuthContextProvider";

const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);

  // auth apis
  const login = async (email, password) => {
    try {
      const { data } = await api.post(`/auth/login`, { email, password });
      console.log(data);

      setIsAuth(true);
    } catch (error) {
      console.log(error);
      setIsAuth(false);
    }
  };

  const logout = async () => {
    try {
      await api.get("/auth/logout");
      setIsAuth(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await api.get("/auth/me");
        console.log(data);
        if (data.logginUser.role === "admin") {
          setisAdmin(true);
        } else {
          setisAdmin(false);
        }
        setIsAuth(true);
      } catch (error) {
        console.log(error);
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContextProvider.Provider value={{ login, isAuth, logout, isAdmin }}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
