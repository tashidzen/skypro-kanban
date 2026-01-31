import {
  Sheader__popUserSet,
  SpopUserSetName,
  SpopUserSetMail,
  SpopUserSetTheme,
  S_hover03
} from "./PopUser.styled.js";

export function PopUser({ userName, userMail }) {
  return (
    <Sheader__popUserSet $popUserSet id="user-set-target">
      <a href="">x</a>
      <SpopUserSetName>{userName}</SpopUserSetName>
      <SpopUserSetMail>{userMail}</SpopUserSetMail>
      <SpopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </SpopUserSetTheme>
      <S_hover03 type="button">
        <a href="#popExit">Выйти</a>
      </S_hover03>
    </Sheader__popUserSet>
  );
}
