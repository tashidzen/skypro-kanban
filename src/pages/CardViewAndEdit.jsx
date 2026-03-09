import { PopBrowse } from "../components/popups/PopBrowse/PopBrowse.jsx";
import { useParams } from "react-router-dom";
// import { TaskContext } from "../context/contextAPI.js";
// import { useContext } from "react";

const CardViewAndEditPage = () => {
  const { id } = useParams();
  // const { tasks } = useContext(TaskContext);
  // const task = tasks.find((card) => String(card.id) === id);

  return (
    <PopBrowse
      // nameTask={task.title}
      // classTypeColor={task.classTypeColor}
      // classTypeCard={task.classTypeCard}
      // typeCard={task.topic}
      // status={task.status}
      taskId={id}
    />
  );
};

export default CardViewAndEditPage;
