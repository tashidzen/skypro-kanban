import { PopBrowse } from "../components/popups/PopBrowse/PopBrowse.jsx";
import { useParams } from "react-router-dom";
import { cardList } from "../data.js";

const CardViewAndEditPage = () => {
  const { id } = useParams();
  const task = cardList.find((card) => String(card.id) === id);

  return (
    <PopBrowse
      nameTask={task.title}
      classTypeColor={task.classTypeColor}
      classTypeCard={task.classTypeCard}
      typeCard={task.topic}
      status={task.status}
    />
  );
};

export default CardViewAndEditPage;
