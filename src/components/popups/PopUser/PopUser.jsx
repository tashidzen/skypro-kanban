import {
  Sheader__popUserSet,
  SpopUserSetName,
  SpopUserSetMail,
  SpopUserSetTheme,
  S_hover03,
} from "./PopUser.styled.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/contextAPI.js";
import { useContext } from "react";

export function PopUser() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Sheader__popUserSet $popUserSet id="user-set-target">
      <SpopUserSetName>{user?.name}</SpopUserSetName>
      <SpopUserSetMail>{user?.login}</SpopUserSetMail>
      <SpopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </SpopUserSetTheme>
      <S_hover03 onClick={logout} type="button">
        <Link to="/exit">Выйти</Link>
      </S_hover03>
    </Sheader__popUserSet>
  );
}
