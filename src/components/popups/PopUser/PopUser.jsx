import {
  Sheader__popUserSet,
  SpopUserSetName,
  SpopUserSetMail,
  SpopUserSetTheme,
  S_hover03,
} from "./PopUser.styled.js";
import { Link } from "react-router-dom";
import { AuthContext, ThemeContext } from "../../../context/contextAPI.js";
import { useContext } from "react";

export function PopUser() {
  const { user, logout } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const onToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Sheader__popUserSet $popUserSet theme={theme} id="user-set-target">
      <SpopUserSetName theme={theme}>{user?.name}</SpopUserSetName>
      <SpopUserSetMail>{user?.login}</SpopUserSetMail>
      <SpopUserSetTheme theme={theme}>
        <p>{theme === "dark" ? "Темная тема 🌙" : "Светлая тема ☀️"}</p>
        <input
          onChange={onToggleTheme}
          type="checkbox"
          className="checkbox"
          name="checkbox"
        />
      </SpopUserSetTheme>
      <S_hover03 theme={theme} onClick={logout} type="button">
        <Link to="/exit">Выйти</Link>
      </S_hover03>
    </Sheader__popUserSet>
  );
}
