import { Card } from "../Card/Card.jsx";

export function Main_column({ nameColumn, cards = [], isColumn = false }) {
    const columnClass = isColumn ? "column" : "";
  return (
    <div className={`main__column ${columnClass}`}>
      <div className="column__title">
        <p>{nameColumn}</p>
      </div>
      <div className="cards">
        {cards.map((cardParameters) => (
          <div key={cardParameters.id} className="cards__item">
            <Card {...cardParameters} />
          </div>
        ))}
      </div>
    </div>
  );
}
