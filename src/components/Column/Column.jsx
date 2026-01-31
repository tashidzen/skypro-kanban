import { Card } from "../Card/Card.jsx";
import { Smain__column, Scolumn__title, Scards, Scards__item } from "./Column.styled.js";

export function Main_column({ nameColumn, cards = [], isColumn = false }) {
    const columnClass = isColumn ? "column" : "";
  return (
    <Smain__column className={`${columnClass}`}>
      <Scolumn__title>
        <p>{nameColumn}</p>
      </Scolumn__title>
      <Scards>
        {cards.map((cardParameters) => (
          <Scards__item key={cardParameters.id}>
            <Card {...cardParameters} />
          </Scards__item>
        ))}
      </Scards>
    </Smain__column>
  );
}
