import { Link } from "react-router-dom";
import { Calendar } from "../../Calendar/Calendar.jsx";
import styled from "styled-components";
import { TaskContext } from "../../../context/contextAPI.js";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../formateDate.js";

export function PopBrowse({ taskId }) {
  const { tasks, delTask, updateTask } = useContext(TaskContext);
  const task = tasks.find((t) => String(t._id) === taskId);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState();
  const [taskStatus, setTaskStatus] = useState("");
  const [taskDate, setTaskDate] = useState(Date.now());

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  useEffect(() => {
    if (task) {
      setTaskName(task.title || "");
      setTaskDescription(task.description || ""); // Обновляем описание
      setTaskStatus(task.status || "Без статуса");
      setTaskDate(task.date || Date.now());
    }
  }, [task]);

  useEffect(() => {
    if (!task) {
      navigate("/");
    }
  }, [task, navigate]);

  const onInputTaskDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  const onStatusClick = (status) => {
    if (isEditing) {
      setTaskStatus(status);
    }
  };

  const onDateChange = (newDate) => {
    if (isEditing) {
      setTaskDate(newDate);
    }
  };

  const getStatusClass = (statusName) => {
    if (!isEditing) {
      return task?.status === statusName ? "_gray" : "_hide";
    }
    // В режиме редактирования подсвечиваем выбранный статус
    return taskStatus === statusName ? "_gray" : "";
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  //редактирование задачи
  const handleSaveClick = async () => {
    setLoading(true);

    try {
      await updateTask(taskId, {
        nameTask: taskName,
        descriptionTask: taskDescription,
        statusTask: taskStatus,
        dateTask: taskDate,
      });

      setIsEditing(false);
      navigate("/");
    } catch (error) {
      console.error("Ошибка при сохранении задачи:", error);
    }
  };

  //отмена редактирования задачи
  const handleCancelClick = () => {
    setTaskName(task.title || "");
    setTaskDescription(task.description || "");
    setTaskStatus(task.status || "Без статуса");
    setTaskDate(task.date || Date.now());
    setIsEditing(false);
  };

  // удаление задачи
  const handleDeleteClick = async () => {
    setDeleting(true);
    await delTask(taskId);
    navigate("/");
  };

  const SclassTypeCard = styled.p`
    color: ${task.classTypeCard};
  `;

  const Scategories__theme = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 1;

    p {
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
      white-space: nowrap;
    }

    display: block;

    background: ${task.classTypeColor};
  `;

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{task.title}</h3>
              <Scategories__theme>
                <SclassTypeCard>{task.topic}</SclassTypeCard>
              </Scategories__theme>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {statuses.map((statusName) => (
                  <div
                    key={statusName}
                    className={`status__theme ${getStatusClass(statusName)}`}
                    onClick={() => onStatusClick(statusName)}
                    style={{ cursor: isEditing ? "pointer" : "default" }}
                  >
                    <p
                      className={
                        isEditing && taskStatus === statusName
                          ? "status-active-text"
                          : ""
                      }
                    >
                      {statusName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly={!isEditing}
                    placeholder="Введите описание задачи..."
                    value={taskDescription}
                    onChange={onInputTaskDescription}
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <Calendar
                  calendarMonth="Сентябрь 2023"
                  classActiveDay={true}
                  deadlineTask="Срок исполнения: "
                  dateControl={formatDate(taskDate)}
                  onDateChange={onDateChange}
                />
              </div>
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <Scategories__theme>
                <SclassTypeCard>{task.topic}</SclassTypeCard>
              </Scategories__theme>
            </div>

            {!isEditing && !deleting && (
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  <button
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={handleEditClick}
                  >
                    Редактировать задачу
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleDeleteClick}
                  >
                    Удалить задачу
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01">
                  <Link to="/">Закрыть</Link>
                </button>
              </div>
            )}

            {isEditing && !loading && !deleting && (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={handleSaveClick}
                  >
                    Сохранить
                  </button>
                  <button
                    className="btn-edit__edit _btn-bor _hover03"
                    onClick={handleCancelClick}
                  >
                    Отменить
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                    onClick={handleDeleteClick}
                  >
                    Удалить задачу
                  </button>
                </div>
                <button className="btn-edit__close _btn-bg _hover01">
                  <Link to="/">Закрыть</Link>
                </button>
              </div>
            )}

            {loading && (
              <div className="pop-browse__loading">Сохраняем изменения...</div>
            )}
            {deleting && (
              <div className="pop-browse__loading">Удаляем задачу...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
