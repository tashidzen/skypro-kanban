import { useContext, useState } from "react";
import { AuthContext, TaskContext } from "./contextAPI";
import { fetchTasks, postTask, deleteTask, editTask } from "../services/api";
import { colors } from "../components/colors.js";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);

  const AddColor = (task) => {
    const getBackgroundColor = (category) => {
      switch (category) {
        case "Web Design":
          return colors.orange.background;
        case "Research":
          return colors.green.background;
        case "Copywriting":
          return colors.purple.background;
        default:
          return colors.gray.background;
      }
    };

    const getTextColor = (category) => {
      switch (category) {
        case "Web Design":
          return colors.orange.color;
        case "Research":
          return colors.green.color;
        case "Copywriting":
          return colors.purple.color;
        default:
          return colors.gray.color;
      }
    };

    const colorBackgroundTask = getBackgroundColor(task.topic);
    const colorTextTask = getTextColor(task.topic);
    return {
      ...task,
      classTypeColor: colorBackgroundTask,
      classTypeCard: colorTextTask,
    };
  };

  // Получение списка задач
  const getAllTasks = async () => {
    try {
      const allTasks = await fetchTasks({ token: user.token });
      const allColorTasks = allTasks.map(AddColor);
      setTasks(allColorTasks);
    } catch (error) {
      console.error("Ошибка при загрузке задач:", error);
      alert("Ошибка при загрузке задач");
    }
  };

  // Добавление новой задачи
  const addTask = async (taskData = {}) => {
    try {
      const {
        nameTask = "Новая задача",
        topicTask = "Research",
        dateTask = Date.now(),
        descriptionTask = " ",
        statusTask = "Без статуса",
      } = taskData;

      const newTask = {
        title: nameTask,
        topic: topicTask,
        date: dateTask,
        description: descriptionTask,
        status: statusTask,
      };

      const updatedTasks = await postTask({
        token: user.token,
        task: newTask,
      });

      const tasksWithColors = updatedTasks.map(AddColor);
      setTasks(tasksWithColors);
    } catch (error) {
      console.error("Ошибка при добавлении задачи:", error);
      alert("Ошибка при добавлении задачи");
    }
  };

  //Удаление задачи
  const delTask = async (id) => {
    try {
      await deleteTask({
        token: user.token,
        id: id,
      });

      const newTasks = tasks.filter((task) => task._id !== id);
      setTasks(newTasks);
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
      alert("Ошибка при удалении задачи");
    }
  };

  //Изменение задачи
  const updateTask = async (id, updatedFields = {}) => {
    const existingTask = tasks.find((task) => task._id === id);
    if (!existingTask) return;

    const updatedTask = {
      ...existingTask,
      title:
        updatedFields.nameTask !== undefined
          ? updatedFields.nameTask
          : existingTask.title,
      topic:
        updatedFields.topicTask !== undefined
          ? updatedFields.topicTask
          : existingTask.topic,
      date:
        updatedFields.dateTask !== undefined
          ? updatedFields.dateTask
          : existingTask.date,
      description:
        updatedFields.descriptionTask !== undefined
          ? updatedFields.descriptionTask
          : existingTask.description,
      status:
        updatedFields.statusTask !== undefined
          ? updatedFields.statusTask
          : existingTask.status,
    };

    try {
      const editTasks = await editTask({
        token: user.token,
        id: id,
        task: updatedTask,
      });

      const tasksWithColors = editTasks.map(AddColor);
      setTasks(tasksWithColors);
    } catch (error) {
      console.error("Ошибка при редактировании задачи:", error);
      alert("Ошибка при редактировании задачи");
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, getAllTasks, addTask, delTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
