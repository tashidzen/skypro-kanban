import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import BaseButton from "./Button";
import BaseInput from "./Input";
import {
  Swrapper,
  ScontainerSignin,
  Smodal,
  Smodal__block,
  Smodal__ttl,
  Smodal__formLogin,
  Smodal__formGroup,
} from "./App.styled.js";

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };
  return (
    <Swrapper>
      <ScontainerSignin>
        <Smodal>
          <Smodal__block>
            <Smodal__ttl>
              <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
            </Smodal__ttl>
            <Smodal__formLogin id="formLogIn" action="#">
              {isSignUp && (
                <BaseInput
                  tag="input"
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                />
              )}
              <BaseInput
                tag="input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <BaseInput
                tag="input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />

              <BaseButton
                onClick={handleLogin}
                text={isSignUp ? "Зарегистрироваться" : "Войти"}
              />

              {!isSignUp && (
                <Smodal__formGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/register">Регистрируйтесь здесь</Link>
                </Smodal__formGroup>
              )}
              {isSignUp && (
                <Smodal__formGroup>
                  <p>
                    Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                  </p>
                </Smodal__formGroup>
              )}
            </Smodal__formLogin>
          </Smodal__block>
        </Smodal>
      </ScontainerSignin>
    </Swrapper>
  );
};

export default AuthForm;
