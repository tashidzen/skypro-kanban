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
import { AuthContext } from "../../context/contextAPI.js";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  function handleClick() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <Sheader>
      <Scontainer>
        <Sheader__block>
          <Sheader__logo $show $light>
            <a href="" target="_self">
              <img src={"images/logo.png"} alt="logo" />
            </a>
          </Sheader__logo>
          <Sheader__logo $dark>
            <a href="" target="_self">
              <img src={"images/logo_dark.png"} alt="logo" />
            </a>
          </Sheader__logo>
          <Sheader__nav>
            <Sheader__btn id="btnMainNew">
              <Link to="card/add">Создать новую задачу</Link>
            </Sheader__btn>
            <Sheader__user onClick={handleClick}>{user?.name}</Sheader__user>
            {isOpen && <PopUser userName={user?.name} userMail={user?.login} />}
          </Sheader__nav>
        </Sheader__block>
      </Scontainer>
    </Sheader>
  );
}
