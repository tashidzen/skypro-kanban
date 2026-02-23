import "../../App.css";
import { Main } from "../Main/Main.jsx";
import { Header } from "../Header/Header.jsx";
import { Swrapper } from "./MainApp.styled.js";
import { Outlet } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { fetchTasks } from "../../services/api.js";

function MainApp() {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const getTasks = useCallback(async () => {
    try {
      setTimeout(() => {
        setLoading(true);
      }, 3000);

      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const token = userInfo?.token;

      const data = await fetchTasks({
        token: token,
      });
      if (data) setTasks(data);
    } catch (err) {
      if (err.message === "Request failed with status code 401") {
        setError("Пожалуйста, авторизуйтесь");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <>
      <Swrapper>
        <Header />
        <Main error={error} tasks={tasks} loading={loading} />
        <Outlet />
      </Swrapper>

      <script src="js/script.js"></script>
    </>
  );
}

export default MainApp;
