import { useState } from "react";
import { AuthContext } from "./contextAPI";
import { signIn } from "../services/auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Функция входа
  const logIn = async (email, password) => {
    try {
      const userData = await signIn({ login: email, password });
      setUser(userData);
      return userData;
    } catch (error) {
      console.error("Ошибка входа:", error.message);
      return;
    }
  };

  // Функция выхода
  const logOut = () => {
    setUser(null); // Удаляем данные пользователя
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
