import { Link } from "react-router-dom";
import { Calendar } from "../../Calendar/Calendar.jsx";
import styled from "styled-components";

export function PopBrowse({
  nameTask,
  classTypeColor,
  classTypeCard,
  typeCard,
  status,
  // hiddenStatusClass1 = true,
  // hiddenStatusClass2 = true,
  // hiddenStatusClass3 = true,
  // hiddenStatusClass4 = true,
  // hiddenStatusClass5 = true,
}) {
  // const hiddenStatus1 = hiddenStatusClass1 ? "_hide" : "_gray";
  // const hiddenStatus2 = hiddenStatusClass2 ? "_hide" : "_gray";
  // const hiddenStatus3 = hiddenStatusClass3 ? "_hide" : "_gray";
  // const hiddenStatus4 = hiddenStatusClass4 ? "_hide" : "_gray";
  // const hiddenStatus5 = hiddenStatusClass5 ? "_hide" : "_gray";
  const getStatusClass = (statusName) => {
    return status === statusName ? "_gray" : "_hide";
  };

  const SclassTypeCard = styled.p`
    color: ${classTypeCard};
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

    background: ${classTypeColor};
  `;

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{nameTask}</h3>
              <Scategories__theme>
                <SclassTypeCard>{typeCard}</SclassTypeCard>
              </Scategories__theme>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div
                  className={`status__theme ${getStatusClass("Без статуса")}`}
                >
                  <p>Без статуса</p>
                </div>
                <div
                  className={`status__theme ${getStatusClass("Нужно сделать")}`}
                >
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className={`status__theme ${getStatusClass("В работе")}`}>
                  <p>В работе</p>
                </div>
                <div
                  className={`status__theme ${getStatusClass("Тестирование")}`}
                >
                  <p>Тестирование</p>
                </div>
                <div className={`status__theme ${getStatusClass("Готово")}`}>
                  <p>Готово</p>
                </div>
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
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <Calendar
                  calendarMonth="Сентябрь 2023"
                  classActiveDay={true}
                  deadlineTask="Срок исполнения: "
                  dateControl="09.09.23"
                />
              </div>
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <Scategories__theme
              >
                <SclassTypeCard>{typeCard}</SclassTypeCard>
              </Scategories__theme>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to="/">Закрыть</Link>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <Link to="/">Сохранить</Link>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <Link to="/">Закрыть</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
