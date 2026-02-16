import {
  Sheader__popUserSet,
  SpopUserSetName,
  SpopUserSetMail,
  SpopUserSetTheme,
  S_hover03,
} from "./PopUser.styled.js";
import { Link } from "react-router-dom";

export function PopUser({ userName, userMail }) {
  return (
    <Sheader__popUserSet $popUserSet id="user-set-target">
      <SpopUserSetName>{userName}</SpopUserSetName>
      <SpopUserSetMail>{userMail}</SpopUserSetMail>
      <SpopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </SpopUserSetTheme>
      <S_hover03 type="button">
        <Link to="/exit">Выйти</Link>
      </S_hover03>
    </Sheader__popUserSet>
  );
}
