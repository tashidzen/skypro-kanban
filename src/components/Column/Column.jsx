import { Card } from "../Card/Card.jsx";
import {
  Smain__column,
  Scolumn__title,
  Scards,
  Scards__item,
  Scards__noTasks,
} from "./Column.styled.js";
import { useContext } from "react";
import { ThemeContext } from "../../context/contextAPI.js";

export function Main_column({ nameColumn, cards = [], isColumn = false }) {
  const { theme } = useContext(ThemeContext);

  const columnClass = isColumn ? "column" : "";
  return (
    <Smain__column className={`${columnClass}`}>
      <Scolumn__title>
        <p>{nameColumn}</p>
      </Scolumn__title>
      <Scards>
        {cards.length === 0 ? (
          <Scards__item key="no-tasks">
            <Scards__noTasks theme={theme}>Нет задач</Scards__noTasks>
          </Scards__item>
        ) : (
          cards.map((cardParameters) => (
            <Scards__item key={cardParameters.id}>
              <Card {...cardParameters} />
            </Scards__item>
          ))
        )}
      </Scards>
    </Smain__column>
  );
}
