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
import { signIn, signUp } from "../services/auth.js";
import { useState } from "react";

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  // состояние полей
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние ошибок
  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние текста ошибки, чтобы показать её пользователю
  const [error, setError] = useState("");

  // функция валидации
  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError("Заполните все поля");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // функция, которая отслеживает в полях изменения
  // и меняет состояние компонента
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  // функция отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // если форма не прошла валидацию, то дальше не продолжаем
      return;
    }
    try {
      console.log("Отправка данных:", formData); // ПОСМОТРИТЕ ЧТО ПРИХОДИТ
      // чтобы не писать две разных функции, выберем нужный запрос через
      // тернарный оператор
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      console.log("Ответ от сервера:", data); // ПОСМОТРИТЕ ЧТО ВЕРНУЛОСЬ

      if (data) {
        console.log("Успех! Устанавливаем авторизацию");
        setIsAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      } else {
        console.log("data пустой или undefined");
        setError("Не удалось зарегистрироваться");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Swrapper>
      <ScontainerSignin>
        <Smodal>
          <Smodal__block>
            <Smodal__ttl>
              <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
            </Smodal__ttl>
            <Smodal__formLogin id="formLogIn" onSubmit={handleSubmit}>
              {isSignUp && (
                <BaseInput
                  error={errors.name}
                  tag="input"
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <BaseInput
                error={errors.login}
                tag="input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
              />
              <BaseInput
                error={errors.password}
                tag="input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{error}</p>
              <BaseButton
                type="submit"
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
