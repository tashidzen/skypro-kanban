import { useState } from "react";
import { AuthContext } from "./contextAPI";
import { signIn } from "../services/auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Функция входа
  const logIn = async (email, password) => {
    try {
      const userData = await signIn({ login: email, password });
      setUser(userData);

      localStorage.setItem("user", JSON.stringify(userData));
      if (userData.token) {
        localStorage.setItem("token", userData.token);
      }

      return userData;
    } catch (error) {
      console.error("Ошибка входа:", error.message);
      return;
    }
  };

  // Функция выхода
  const logOut = () => {
    setUser(null); // Удаляем данные пользователя
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
