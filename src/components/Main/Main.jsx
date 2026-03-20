import { useContext } from "react";
import { Main_column } from "../Column/Column.jsx";
import {
  Smain,
  Scontainer,
  Smain__block,
  Smain__content,
  Smain__loading,
  S_error,
  SmainNoTasksMessage,
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
              {tasks.length === 0 ? (
                <SmainNoTasksMessage theme={theme}>
                  Нет задач
                  <svg
                    width="70px"
                    height="50px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m 11.714844 8.011719 c -0.960938 0.066406 -1.863282 0.480469 -2.542969 1.160156 c -1.5625 1.5625 -1.5625 4.09375 0 5.65625 s 4.09375 1.5625 5.65625 0 s 1.5625 -4.09375 0 -5.65625 c -0.820313 -0.820313 -1.957031 -1.246094 -3.113281 -1.160156 z m -1.128906 1.570312 c 0.253906 0 0.511718 0.101563 0.707031 0.296875 l 0.707031 0.707032 l 0.707031 -0.707032 c 0.390625 -0.390625 1.023438 -0.390625 1.414063 0 s 0.390625 1.023438 0 1.414063 l -0.707032 0.707031 l 0.707032 0.707031 c 0.390625 0.390625 0.390625 1.023438 0 1.414063 s -1.023438 0.390625 -1.414063 0 l -0.707031 -0.707032 l -0.707031 0.707032 c -0.390625 0.390625 -1.023438 0.390625 -1.414063 0 s -0.390625 -1.023438 0 -1.414063 l 0.707032 -0.707031 l -0.707032 -0.707031 c -0.390625 -0.390625 -0.390625 -1.023438 0 -1.414063 c 0.195313 -0.195312 0.453125 -0.296875 0.707032 -0.296875 z m 0 0"
                      className="error"
                      fill="#e01b24"
                    />
                    <path
                      d="m 7 0 c -0.554688 0 -1 0.445312 -1 1 h -2 c -1.644531 0 -3 1.355469 -3 3 v 9 c 0 1.644531 1.355469 3 3 3 h 2 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -2 c -0.570312 0 -1 -0.429688 -1 -1 v -9 c 0 -0.570312 0.429688 -1 1 -1 h 1 v 1 c 0 0.554688 0.445312 1 1 1 h 4 c 0.554688 0 1 -0.445312 1 -1 v -1 h 1 c 0.570312 0 1 0.429688 1 1 v 2 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -2 c 0 -1.644531 -1.355469 -3 -3 -3 h -2 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 0"
                      fill="#858a8d"
                      fillOpacity="0.35"
                    />
                  </svg>
                </SmainNoTasksMessage>
              ) : (
                <>
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
                </>
              )}
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
