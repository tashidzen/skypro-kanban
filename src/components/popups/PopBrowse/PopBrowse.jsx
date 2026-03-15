import { Link } from "react-router-dom";
import { Calendar } from "../../Calendar/Calendar.jsx";
import { TaskContext, ThemeContext } from "../../../context/contextAPI.js";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate, formatToMonthYear } from "../../../formateDate.js";
import {
  SpopBrowse,
  SpopBrowseContainer,
  SpopBrowseBlock,
  SpopBrowseContent,
  SpopBrowseTopBlock,
  SThemeDown,
  SpopBrowseTtl,
  SpopBrowseStatus,
  SstatusP,
  SstatusThemes,
  SstatusTheme,
  SpopBrowseWrap,
  SpopBrowseForm,
  Ssubttl,
  SformBrowseBlock,
  SformBrowseArea,
  Scalendar,
  ScalendarTtl,
  ScategoriesP,
  SpopBrowseBtn,
  SbtnGroup,
  SbtnBor,
  SbtnBg,
  SpopBrowseLoading,
  SclassTypeCard,
  Scategories__theme,
} from "./PopBrowse.styled.js";

export function PopBrowse({ taskId }) {
  const { tasks, delTask, updateTask } = useContext(TaskContext);
  const { theme } = useContext(ThemeContext);
  const task = tasks.find((t) => String(t._id) === taskId);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task?.title || "");
  const [taskDescription, setTaskDescription] = useState(
    task?.description || "",
  );
  const [taskStatus, setTaskStatus] = useState(task?.status || "Без статуса");
  const [taskDate, setTaskDate] = useState(task?.date || (() => Date.now()));

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

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
      const [day, month, year] = newDate.split(".");
      const fullYear = 2000 + parseInt(year);

      const isoDate = new Date(
        Date.UTC(fullYear, parseInt(month) - 1, parseInt(day), 12, 0, 0),
      ).toISOString();

      setTaskDate(isoDate);
    }
  };

  const getStatusClass = (statusName) => {
    if (!isEditing) {
      return {
        $isGray: task?.status === statusName,
        $isHide: task?.status !== statusName,
      };
    }
    // В режиме редактирования подсвечиваем выбранный статус
    return {
      $isGray: taskStatus === statusName,
      $isHide: false,
    };
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const validateDescription = () => {
    if (!taskDescription || taskDescription.trim() === "") {
      alert("Пожалуйста, введите описание задачи");
      return false;
    }
    return true;
  };

  //редактирование задачи
  const handleSaveClick = async () => {
    if (!validateDescription()) {
      return;
    }
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

  return (
    <SpopBrowse id="popBrowse">
      <SpopBrowseContainer>
        <SpopBrowseBlock theme={theme}>
          <SpopBrowseContent>
            <SpopBrowseTopBlock>
              <SpopBrowseTtl theme={theme}>{task?.title}</SpopBrowseTtl>
              <Scategories__theme
                theme={theme}
                $lightBg={task?.classTypeColor}
                $darkBg={task?.classTypeCard}
              >
                <SclassTypeCard
                  theme={theme}
                  $lightText={task?.classTypeCard}
                  $darkText={task?.classTypeColor}
                >
                  {task?.topic}
                </SclassTypeCard>
              </Scategories__theme>
            </SpopBrowseTopBlock>
            <SpopBrowseStatus>
              <SstatusP as="p" theme={theme}>
                Статус
              </SstatusP>
              <SstatusThemes>
                {statuses.map((statusName) => (
                  <SstatusTheme
                    theme={theme}
                    key={statusName}
                    {...getStatusClass(statusName)}
                    onClick={() => onStatusClick(statusName)}
                    style={{ cursor: isEditing ? "pointer" : "default" }}
                  >
                    <p>{statusName}</p>
                  </SstatusTheme>
                ))}
              </SstatusThemes>
            </SpopBrowseStatus>
            <SpopBrowseWrap>
              <SpopBrowseForm id="formBrowseCard" action="#">
                <SformBrowseBlock>
                  <Ssubttl as="label" theme={theme} htmlFor="textArea01">
                    Описание задачи
                  </Ssubttl>
                  <SformBrowseArea
                    theme={theme}
                    name="text"
                    id="textArea01"
                    readOnly={!isEditing}
                    placeholder="Введите описание задачи..."
                    value={taskDescription}
                    onChange={onInputTaskDescription}
                  ></SformBrowseArea>
                </SformBrowseBlock>
              </SpopBrowseForm>
              <Scalendar $popNewCardCalendar>
                <ScalendarTtl as="p">Даты</ScalendarTtl>
                <Calendar
                  calendarMonth={formatToMonthYear(taskDate)}
                  classActiveDay={true}
                  deadlineTask="Срок исполнения: "
                  dateControl={formatDate(taskDate)}
                  onDateChange={onDateChange}
                />
              </Scalendar>
            </SpopBrowseWrap>
            <SThemeDown>
              <ScategoriesP as="p">Категория</ScategoriesP>
              <Scategories__theme color={task?.classTypeColor}>
                <SclassTypeCard color={task?.classTypeCard}>
                  {task?.topic}
                </SclassTypeCard>
              </Scategories__theme>
            </SThemeDown>

            {!isEditing && !deleting && (
              <SpopBrowseBtn>
                <SbtnGroup>
                  <SbtnBor $_hover03 onClick={handleEditClick}>
                    Редактировать задачу
                  </SbtnBor>
                  <SbtnBor $_hover03 onClick={handleDeleteClick}>
                    Удалить задачу
                  </SbtnBor>
                </SbtnGroup>
                <SbtnBg $_hover01>
                  <Link to="/">Закрыть</Link>
                </SbtnBg>
              </SpopBrowseBtn>
            )}

            {isEditing && !loading && !deleting && (
              <SpopBrowseBtn>
                <SbtnGroup>
                  <SbtnBg $_hover01 onClick={handleSaveClick}>
                    Сохранить
                  </SbtnBg>
                  <SbtnBor $_hover03 onClick={handleCancelClick}>
                    Отменить
                  </SbtnBor>
                  <SbtnBor $_hover03 id="btnDelete" onClick={handleDeleteClick}>
                    Удалить задачу
                  </SbtnBor>
                </SbtnGroup>
                <SbtnBg $_hover01>
                  <Link to="/">Закрыть</Link>
                </SbtnBg>
              </SpopBrowseBtn>
            )}

            {loading && (
              <SpopBrowseLoading theme={theme}>
                Сохраняем изменения...
              </SpopBrowseLoading>
            )}
            {deleting && (
              <SpopBrowseLoading theme={theme}>
                Удаляем задачу...
              </SpopBrowseLoading>
            )}
          </SpopBrowseContent>
        </SpopBrowseBlock>
      </SpopBrowseContainer>
    </SpopBrowse>
  );
}
