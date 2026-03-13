import { Main } from "../Main/Main.jsx";
import { Header } from "../Header/Header.jsx";
import { Swrapper } from "./MainApp.styled.js";
import { Outlet } from "react-router-dom";
import { useState, useEffect, useCallback, useContext } from "react";
import { TaskContext } from "../../context/contextAPI.js";

function MainApp() {
  const [loading, setLoading] = useState(false);
  const { setTasks, getAllTasks } = useContext(TaskContext);
  const [error, setError] = useState("");

  const getTasks = useCallback(async () => {
    try {
      setTimeout(() => {
        setLoading(true);
      }, 3000);

      const data = await getAllTasks();
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
    <Swrapper>
      <Header />
      <Main error={error} loading={loading} />
      <Outlet />
    </Swrapper>
  );
}

export default MainApp;
