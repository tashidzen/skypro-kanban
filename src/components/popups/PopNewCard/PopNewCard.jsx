import { Calendar } from "../../Calendar/Calendar.jsx";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../../context/contextAPI.js";
import { useContext, useState } from "react";
import { colors } from "../../colors.js";
import { formatToMonthYear } from "../../../formateDate.js";
import {
  SformNewBlock,
  SformNewInput,
  Ssubttl,
  ScalendarTtl,
  Scategories,
  ScategoriesP,
  SformNewArea,
  Scalendar,
  SpopNewCardClose,
  SpopNewCardTtl,
  SpopNewCardForm,
  SpopNewCardWrap,
  SpopNewCardContent,
  SpopNewCardBlock,
  SpopNewCardContainer,
  SpopNewCard,
  ScategoriesThemes,
  SformNewCreate,
  ScategoriesTheme,
} from "./PopNewCard.styled.js";

export function PopNewCard({ onClose }) {
  const navigate = useNavigate();

  const [saving, setSaving] = useState(false);

  const { addTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Research");
  const [selectedDate, setSelectedDate] = useState(null);

  const currentDate = formatToMonthYear(new Date());

  const onInputTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const onInputTaskDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const onDateChange = (newDate) => {
    setSelectedDate(newDate);
  };
  const deadlineText = selectedDate
    ? `Срок исполнения: `
    : "Выберите срок исполнения";

  const onAddTask = async () => {
    setSaving(true);

    try {
      const getBackgroundColor = (category) => {
        switch (category) {
          case "Web Design":
            return colors.orange.background;
          case "Research":
            return colors.green.background;
          case "Copywriting":
            return colors.purple.background;
          default:
            return colors.gray.background;
        }
      };

      const getTextColor = (category) => {
        switch (category) {
          case "Web Design":
            return colors.orange.color;
          case "Research":
            return colors.green.color;
          case "Copywriting":
            return colors.purple.color;
          default:
            return colors.gray.color;
        }
      };

      // Преобразуем выбранную дату в ISO формат
      let dateForApi = new Date();
      if (selectedDate) {
        const [day, month, year] = selectedDate.split(".");
        const fullYear = 2000 + parseInt(year);
        dateForApi = new Date(
          fullYear,
          parseInt(month) - 1,
          parseInt(day),
        ).toISOString();
      }

      // Ждем добавления задачи
      await addTask({
        nameTask: taskName,
        descriptionTask: taskDescription,
        topicTask: selectedCategory,
        classTypeColor: getBackgroundColor(selectedCategory),
        classTypeCard: getTextColor(selectedCategory),
        dateTask: dateForApi,
      });
      // Очищаем форму
      setTaskName("");
      setTaskDescription("");
      setSelectedCategory("Research");
      setSelectedDate(null);

      // Закрываем форму
      handleClose();
    } catch (error) {
      console.error("Ошибка при создании задачи:", error);
      alert("Не удалось создать задачу. Попробуйте снова.");
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/");
    }
  };

  return (
    <SpopNewCard id="popNewCard">
      <SpopNewCardContainer>
        <SpopNewCardBlock>
          <SpopNewCardContent>
            <SpopNewCardTtl>Создание задачи</SpopNewCardTtl>
            <SpopNewCardClose to="/" onClick={handleClose}>
              &#10006;
            </SpopNewCardClose>

            <SpopNewCardWrap>
              <SpopNewCardForm id="formNewCard" action="#">
                <SformNewBlock>
                  <Ssubttl as="label" htmlFor="formTitle">
                    Название задачи
                  </Ssubttl>
                  <SformNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={taskName}
                    onChange={onInputTaskName}
                    disabled={saving}
                  />
                </SformNewBlock>
                <SformNewBlock>
                  <Ssubttl as="label" htmlFor="textArea">
                    Описание задачи
                  </Ssubttl>
                  <SformNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={taskDescription}
                    onChange={onInputTaskDescription}
                    disabled={saving}
                  ></SformNewArea>
                </SformNewBlock>
              </SpopNewCardForm>
              <Scalendar $popNewCardCalendar>
                <ScalendarTtl as="p">Даты</ScalendarTtl>
                <Calendar
                  calendarMonth={currentDate}
                  classActiveDay={true}
                  deadlineTask={deadlineText}
                  dateControl={selectedDate || ""}
                  onDateChange={onDateChange}
                />
              </Scalendar>
            </SpopNewCardWrap>
            <Scategories>
              <ScategoriesP as="p">Категория</ScategoriesP>
              <ScategoriesThemes>
                <ScategoriesTheme
                  $color="orange"
                  $isActive={selectedCategory === "Web Design"}
                  onClick={() => onCategoryClick("Web Design")}
                >
                  <p>Web Design</p>
                </ScategoriesTheme>
                <ScategoriesTheme
                  $color="green"
                  $isActive={selectedCategory === "Research"}
                  onClick={() => onCategoryClick("Research")}
                >
                  <p>Research</p>
                </ScategoriesTheme>
                <ScategoriesTheme
                  $color="purple"
                  $isActive={selectedCategory === "Copywriting"}
                  onClick={() => onCategoryClick("Copywriting")}
                >
                  <p>Copywriting</p>
                </ScategoriesTheme>
              </ScategoriesThemes>
            </Scategories>
            <SformNewCreate
              $_hover01
              onClick={onAddTask}
              id="btnCreate"
              disabled={saving}
              $saving={saving}
            >
              {saving ? "Добавляем " : "Создать задачу"}
            </SformNewCreate>
          </SpopNewCardContent>
        </SpopNewCardBlock>
      </SpopNewCardContainer>
    </SpopNewCard>
  );
}

export default PopNewCard;
