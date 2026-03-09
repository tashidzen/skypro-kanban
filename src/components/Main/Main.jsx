import { useContext } from "react";
import { Main_column } from "../Column/Column.jsx";
import {
  Smain,
  Scontainer,
  Smain__block,
  Smain__content,
  Smain__loading,
  S_error,
} from "./Main.styled.js";
import { TaskContext } from "../../context/contextAPI.js";

export function Main({ error, loading }) {
  const { tasks } = useContext(TaskContext);

  const cardListWithoutStatus = tasks.filter(
    (card) => card.status === "Без статуса",
  );

  const cardListToDo = tasks.filter((card) => card.status === "Нужно сделать");

  const cardListInProgress = tasks.filter((card) => card.status === "В работе");

  const cardListTesting = tasks.filter(
    (card) => card.status === "Тестирование",
  );

  const cardListReady = tasks.filter((card) => card.status === "Готово");

  return (
    <Smain>
      {loading ? (
        <Scontainer>
          <Smain__block>
            <S_error>{error}</S_error>
            <Smain__content>
              <Main_column
                nameColumn="Без статуса"
                isColumn={true}
                cards={cardListWithoutStatus}
              />
              <Main_column nameColumn="Нужно сделать" cards={cardListToDo} />
              <Main_column nameColumn="В работе" cards={cardListInProgress} />
              <Main_column nameColumn="Тестирование" cards={cardListTesting} />
              <Main_column nameColumn="Готово" cards={cardListReady} />
            </Smain__content>
          </Smain__block>
        </Scontainer>
      ) : (
        <Smain__loading>Данные загружаются...</Smain__loading>
      )}
    </Smain>
  );
}

export default Main;
