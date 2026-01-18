import { Main_column } from "../Column/Column.jsx";
import { nanoid } from "nanoid";

export function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Main_column
              nameColumn="Без статуса"
              isColumn={true}
              cards={[
                {
                  id: nanoid(),
                  classTypeColor: "card__theme _orange",
                  classTypeCard: "_orange",
                  typeCard: "Web Design",
                  nameCard: "Название задачи",
                  dateCard: "30.10.23",
                },
                {
                  id: nanoid(),
                  classTypeColor: "card__theme _green",
                  classTypeCard: "_green",
                  typeCard: "Research",
                  nameCard: "Название задачи",
                  dateCard: "30.10.23",
                },
                {
                  id: nanoid(),
                  classTypeColor: "card__theme _orange",
                  classTypeCard: "_orange",
                  typeCard: "Web Design",
                  nameCard: "Название задачи",
                  dateCard: "30.10.23",
                },
                {
                  id: nanoid(),
                  classTypeColor: "card__theme _purple",
                  classTypeCard: "_purple",
                  typeCard: "Copywriting",
                  nameCard: "Название задачи",
                  dateCard: "30.10.23",
                },
                {
                  id: nanoid(),
                  classTypeColor: "card__theme _orange",
                  classTypeCard: "_orange",
                  typeCard: "Web Design",
                  nameCard: "Название задачи",
                  dateCard: "30.10.23",
                },
              ]}
            />
            <Main_column
              nameColumn="Нужно сделать"
              cards={[
                {
                  id: nanoid(),
                  classTypeColor: "card__theme _green",
                  classTypeCard: "_green",
                  typeCard: "Research",
                  nameCard: "Название задачи",
                  dateCard: "30.10.23",
                },
              ]}
            />
            <Main_column
              nameColumn="В работе"
              cards={[
                {
                  id: nanoid(),
                  classTypeColor: "card__theme _green",
                  classTypeCard: "_green",
                  typeCard: "Research",
                  nameCard: "Название задачи",
                  dateCard: "30.10.23",
                },
                {
                  id: nanoid(),
                  classTypeColor: "card__theme _purple",
                  classTypeCard: "_purple",
                  typeCard: "Copywriting",
                  nameCard: "Название задачи",
                  dateCard: "30.10.23",
                },
                {
                  id: nanoid(),
                  classTypeColor: "card__theme _orange",
                  classTypeCard: "_orange",
                  typeCard: "Web Design",
                  nameCard: "Название задачи",
                  dateCard: "30.10.23",
                },
              ]}
            />
            <Main_column
              nameColumn="Тестирование"
              cards={[
                {
                  id: nanoid(),
                  classTypeColor: "card__theme _green",
                  classTypeCard: "_green",
                  typeCard: "Research",
                  nameCard: "Название задачи",
                  dateCard: "30.10.23",
                },
              ]}
            />
            <Main_column
              nameColumn="Готово"
              cards={[
                {
                  id: nanoid(),
                  classTypeColor: "card__theme _green",
                  classTypeCard: "_green",
                  typeCard: "Research",
                  nameCard: "Название задачи",
                  dateCard: "30.10.23",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
