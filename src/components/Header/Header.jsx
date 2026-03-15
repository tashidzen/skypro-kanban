import { PopUser } from "../popups/PopUser/PopUser.jsx";
import { useContext, useState } from "react";
import {
  Sheader,
  Sheader__block,
  Sheader__logo,
  Sheader__nav,
  Sheader__user,
  Sheader__btn,
} from "./Header.styled.js";
import { Scontainer } from "../Main/Main.styled.js";
import { Link } from "react-router-dom";
import { AuthContext, ThemeContext } from "../../context/contextAPI.js";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  function handleClick() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <Sheader theme={theme}>
      <Scontainer>
        <Sheader__block>
          <Sheader__logo theme={theme} $show>
            <a href="" target="_self">
              {theme === "light" ? (
                <img src={"images/logo.png"} alt="logo" />
              ) : (
                <img src={"images/logo_dark.png"} alt="logo" />
              )}
            </a>
          </Sheader__logo>
          <Sheader__nav>
            <Sheader__btn id="btnMainNew">
              <Link to="card/add">Создать новую задачу</Link>
            </Sheader__btn>
            <Sheader__user theme={theme} onClick={handleClick}>
              {user?.name}
            </Sheader__user>
            {isOpen && <PopUser userName={user?.name} userMail={user?.login} />}
          </Sheader__nav>
        </Sheader__block>
      </Scontainer>
    </Sheader>
  );
}
