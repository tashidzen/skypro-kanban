import { useNavigate } from "react-router-dom";
import {
  SpopExit,
  SpopExit__container,
  SpopExit__block,
  SpopExit__ttl,
  SpopExit__form,
  SpopExit__formGroup,
  SpopExit__exitYes,
  SpopExit__exitNo,
} from "./PopExit.styled";
import { toast } from "react-toastify";
import { useContext } from "react";
import { ThemeContext } from "../../../context/contextAPI";

const PopExit = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  function handleLogout(e) {
    e.preventDefault();
    setIsAuth(false);
    navigate("/login");
    toast.success("До свидания!");
  }

  return (
    <>
      <SpopExit id="popExit">
        <SpopExit__container>
          <SpopExit__block theme={theme}>
            <SpopExit__ttl theme={theme}>
              <h2>Выйти из аккаунта?</h2>
            </SpopExit__ttl>
            <SpopExit__form id="formExit" action="#">
              <SpopExit__formGroup>
                <SpopExit__exitYes
                  theme={theme}
                  $_hover01
                  id="exitYes"
                  onClick={handleLogout}
                >
                  Да, выйти
                </SpopExit__exitYes>
                <SpopExit__exitNo
                  theme={theme}
                  $_hover03
                  type="button"
                  id="exitNo"
                  onClick={() => navigate("/")}
                >
                  Нет, остаться
                </SpopExit__exitNo>
              </SpopExit__formGroup>
            </SpopExit__form>
          </SpopExit__block>
        </SpopExit__container>
      </SpopExit>
    </>
  );
};

export default PopExit;
