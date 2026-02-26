import { Calendar } from "../../Calendar/Calendar.jsx";
import { Link, useNavigate } from "react-router-dom";
import { TaskContext } from "../../../context/contextAPI.js";
import { useContext, useState } from "react";
import { colors } from "../../colors.js";

export function PopNewCard({ onClose }) {
  const navigate = useNavigate();

  const [saving, setSaving] = useState(false);

  const { addTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Research");

  const onInputTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const onInputTaskDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };

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

      // Ждем добавления задачи
      await addTask({
        nameTask: taskName,
        descriptionTask: taskDescription,
        topicTask: selectedCategory,
        classTypeColor: getBackgroundColor(selectedCategory),
        classTypeCard: getTextColor(selectedCategory),
      });
      // Очищаем форму
      setTaskName("");
      setTaskDescription("");
      setSelectedCategory("Research");

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
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" onClick={handleClose} className="pop-new-card__close">
              &#10006;
            </Link>

            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={taskName}
                    onChange={onInputTaskName}
                    disabled={saving}
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={taskDescription}
                    onChange={onInputTaskDescription}
                    disabled={saving}
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <Calendar
                  calendarMonth="Сентябрь 2023"
                  deadlineTask="Выберите срок исполнения"
                />
              </div>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div
                  className={`categories__theme _orange ${selectedCategory === "Web Design" ? "_active-category" : ""}`}
                  onClick={() => onCategoryClick("Web Design")}
                >
                  <p className="_orange">Web Design</p>
                </div>
                <div
                  className={`categories__theme _green ${selectedCategory === "Research" ? "_active-category" : ""}`}
                  onClick={() => onCategoryClick("Research")}
                >
                  <p className="_green">Research</p>
                </div>
                <div
                  className={`categories__theme _purple ${selectedCategory === "Copywriting" ? "_active-category" : ""}`}
                  onClick={() => onCategoryClick("Copywriting")}
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button
              onClick={onAddTask}
              className="form-new__create _hover01"
              id="btnCreate"
              disabled={saving}
            >
              {saving ? "Добавляем задачу..." : "Создать задачу"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
