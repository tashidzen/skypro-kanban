import { PopUser } from "../popups/PopUser/PopUser.jsx";
import { useState } from "react";
import { Sheader, Sheader__block, Sheader__logo, Sheader__nav, Sheader__user, Sheader__btn} from "./Header.styled.js";
import { Scontainer } from "../Main/Main.styled.js";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
            <Sheader__user
              onClick={handleClick}
            >
              Ivan Ivanov
            </Sheader__user>
            {isOpen && (
              <PopUser
                userName="Ivan Ivanov"
                userMail="ivan.ivanov@gmail.com"
              />
            )}
          </Sheader__nav>
        </Sheader__block>
      </Scontainer>
    </Sheader>
  );
}
