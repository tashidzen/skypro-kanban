import { Calendar } from "../../Calendar/Calendar.jsx";

export function PopBrowse({
  nameTask,
  classTypeColor,
  typeCard,
  hiddenStatusClass1 = true,
  hiddenStatusClass2 = true,
  hiddenStatusClass3 = true,
  hiddenStatusClass4 = true,
  hiddenStatusClass5 = true,
}) {
    const hiddenStatus1 = hiddenStatusClass1 ? "_hide" : "_gray";
    const hiddenStatus2 = hiddenStatusClass2 ? "_hide" : "_gray";
    const hiddenStatus3 = hiddenStatusClass3 ? "_hide" : "_gray";
    const hiddenStatus4 = hiddenStatusClass4 ? "_hide" : "_gray";
    const hiddenStatus5 = hiddenStatusClass5 ? "_hide" : "_gray";
  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{nameTask}</h3>
              <div className={`categories__theme theme-top ${classTypeColor} _active-category`}>
                <p className={classTypeColor}>{typeCard}</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className={`status__theme ${hiddenStatus1}`}>
                  <p>Без статуса</p>
                </div>
                <div className={`status__theme ${hiddenStatus2}`}>
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className={`status__theme ${hiddenStatus3}`}>
                  <p>В работе</p>
                </div>
                <div className={`status__theme ${hiddenStatus4}`}>
                  <p>Тестирование</p>
                </div>
                <div className={`status__theme ${hiddenStatus5}`}>
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
              <div className={`categories__theme ${classTypeColor} _active-category`}>
                <p className={classTypeColor}>{typeCard}</p>
              </div>
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
                <a href="#">Закрыть</a>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
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
                <a href="#">Закрыть</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
