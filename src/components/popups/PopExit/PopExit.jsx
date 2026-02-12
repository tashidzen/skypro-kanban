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

const PopExit = ({ setIsAuth }) => {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    setIsAuth(false);
    navigate("/login");
  }

  return (
    <>
      <SpopExit id="popExit">
        <SpopExit__container>
          <SpopExit__block>
            <SpopExit__ttl>
              <h2>Выйти из аккаунта?</h2>
            </SpopExit__ttl>
            <SpopExit__form id="formExit" action="#">
              <SpopExit__formGroup>
                <SpopExit__exitYes
                  $_hover01
                  id="exitYes"
                  onClick={handleLogout}
                >
                  Да, выйти
                </SpopExit__exitYes>
                <SpopExit__exitNo
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
