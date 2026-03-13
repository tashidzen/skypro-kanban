import { PopBrowse } from "../components/popups/PopBrowse/PopBrowse.jsx";
import { useParams } from "react-router-dom";

const CardViewAndEditPage = () => {
  const { id } = useParams();

  return <PopBrowse taskId={id} />;
};

export default CardViewAndEditPage;
