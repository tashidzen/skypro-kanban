import { Main_column } from "../Column/Column.jsx";
import { cardList } from "../../data.js";
import { useState, useEffect } from "react";
import { Smain, Scontainer, Smain__block, Smain__content, Smain__loading } from "./Main.styled.js";

export function Main() {
  const cardListWithoutStatus = cardList.filter(
    (card) => card.status === "Без статуса",
  );

  const cardListToDo = cardList.filter(
    (card) => card.status === "Нужно сделать",
  );

  const cardListInProgress = cardList.filter(
    (card) => card.status === "В работе",
  );

  const cardListTesting = cardList.filter(
    (card) => card.status === "Тестирование",
  );

  const cardListReady = cardList.filter((card) => card.status === "Готово");

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <Smain>
      {loading ? (
        <Scontainer>
          <Smain__block>
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
