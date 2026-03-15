import { Fragment, useContext } from "react";
import { Main_column } from "../Column/Column.jsx";
import {
  Smain,
  Scontainer,
  Smain__block,
  Smain__content,
  Smain__loading,
  S_error,
} from "./Main.styled.js";
import { TaskContext, ThemeContext } from "../../context/contextAPI.js";

export function Main({ error, loading }) {
  const { tasks } = useContext(TaskContext);
  const { theme } = useContext(ThemeContext);

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
    <Smain theme={theme}>
      {loading ? (
        <Scontainer>
          <Smain__block>
            <S_error>{error}</S_error>
            <Smain__content>
              <Fragment key="all-columns">
                <Main_column
                  key="without-status"
                  nameColumn="Без статуса"
                  isColumn={true}
                  cards={cardListWithoutStatus}
                />
                <Main_column
                  key="to-do"
                  nameColumn="Нужно сделать"
                  cards={cardListToDo}
                />
                <Main_column
                  key="in-progress"
                  nameColumn="В работе"
                  cards={cardListInProgress}
                />
                <Main_column
                  key="test"
                  nameColumn="Тестирование"
                  cards={cardListTesting}
                />
                <Main_column
                  key="done"
                  nameColumn="Готово"
                  cards={cardListReady}
                />
              </Fragment>
            </Smain__content>
          </Smain__block>
        </Scontainer>
      ) : (
        <Smain__loading theme={theme}>Данные загружаются...</Smain__loading>
      )}
    </Smain>
  );
}

export default Main;
