import { PopUser } from "../popups/PopUser/PopUser.jsx";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src={"images/logo.png"} alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src={"images/logo_dark.png"} alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a
              onClick={handleClick}
              href="#user-set-target"
              className="header__user _hover02"
            >
              Ivan Ivanov
            </a>
            {isOpen && (
              <PopUser
                userName="Ivan Ivanov"
                userMail="ivan.ivanov@gmail.com"
              />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
