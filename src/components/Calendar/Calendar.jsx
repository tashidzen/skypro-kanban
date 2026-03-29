import {
  Scalendar__block,
  Scalendar__nav,
  Scalendar__month,
  Snav__actions,
  Snav__action,
  Scalendar__content,
  Scalendar__daysNames,
  Scalendar__dayName,
  Scalendar__cells,
  Scalendar__cell,
  Scalendar__period,
  Scalendar__p,
  SdateControl,
} from "./Calendar.styled";
import { useState, useEffect, useContext } from "react";
import { formatDate, formatToMonthYear } from "../../formateDate";
import { ThemeContext } from "../../context/contextAPI.js";

const parseMonthYear = (monthYearString) => {
  const months = {
    январь: 0,
    февраль: 1,
    март: 2,
    апрель: 3,
    май: 4,
    июнь: 5,
    июль: 6,
    август: 7,
    сентябрь: 8,
    октябрь: 9,
    ноябрь: 10,
    декабрь: 11,
  };

  const parts = monthYearString.split(" ");
  const monthName = parts[0].toLowerCase();
  const year = parseInt(parts[1]);

  return new Date(year, months[monthName], 1);
};

// Функция для получения дней текущего месяца
const getCurrentMonthDays = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Первый день месяца
  const firstDayOfMonth = new Date(year, month, 1);
  // Последний день месяца
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  let firstDayWeek = firstDayOfMonth.getDay();
  // Если firstDayWeek = 0 (воскресенье), то это 7-й день
  firstDayWeek = firstDayWeek === 0 ? 7 : firstDayWeek;

  let lastDayWeek = lastDayOfMonth.getDay();
  lastDayWeek = lastDayWeek === 0 ? 7 : lastDayWeek;

  const days = [];

  // Добавляем пустые дни
  for (let i = 1; i < firstDayWeek; i++) {
    days.push({
      day: null,
      date: null,
      isEmpty: true,
    });
  }

  // Добавляем дни текущего месяца
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      date: new Date(year, month, i),
      isEmpty: false,
    });
  }

  // Добавляем пустые дни в конце до воскресенья
  const remainingDays = 7 - lastDayWeek;
  if (remainingDays > 0 && remainingDays < 7) {
    for (let i = 0; i < remainingDays; i++) {
      days.push({
        day: null,
        date: null,
        isEmpty: true,
      });
    }
  }

  return days;
};

const parseDateString = (dateString) => {
  if (!dateString) return null;

  // Если приходит ISO строка из API
  if (dateString.includes("T") || dateString.includes("-")) {
    const date = new Date(dateString);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  // Если приходит строка в формате "DD.MM.YY"
  const parts = dateString.split(".");
  if (parts.length === 3) {
    const [day, month, year] = parts;
    const fullYear = year.length === 2 ? 2000 + parseInt(year) : parseInt(year);
    return new Date(fullYear, parseInt(month) - 1, parseInt(day));
  }
  return null;
};

export function Calendar({
  calendarMonth,
  classActiveDay = false,
  deadlineTask,
  dateControl,
  onDateChange,
}) {
  const { theme } = useContext(ThemeContext);

  const [currentDate, setCurrentDate] = useState(() => {
    return parseMonthYear(calendarMonth);
  });

  const [selectedDate, setSelectedDate] = useState(() => {
    return parseDateString(dateControl);
  });

  useEffect(() => {
    setSelectedDate(parseDateString(dateControl));
  }, [dateControl]);

  useEffect(() => {
    setCurrentDate(parseMonthYear(calendarMonth));
  }, [calendarMonth]);

  const handlePrevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  const handleDateClick = (day) => {
    setSelectedDate(day.date);
    if (onDateChange) {
      const formattedDate = formatDate(day.date);
      onDateChange(formattedDate);
    }
  };

  const days = getCurrentMonthDays(currentDate);
  const today = new Date();

  return (
    <Scalendar__block>
      <Scalendar__nav>
        <Scalendar__month>{formatToMonthYear(currentDate)}</Scalendar__month>
        <Snav__actions>
          <Snav__action data-action="prev" onClick={handlePrevMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="11"
              viewBox="0 0 6 11"
            >
              <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
            </svg>
          </Snav__action>
          <Snav__action data-action="next" onClick={handleNextMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="11"
              viewBox="0 0 6 11"
            >
              <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
            </svg>
          </Snav__action>
        </Snav__actions>
      </Scalendar__nav>
      <Scalendar__content>
        <Scalendar__daysNames>
          <Scalendar__dayName>пн</Scalendar__dayName>
          <Scalendar__dayName>вт</Scalendar__dayName>
          <Scalendar__dayName>ср</Scalendar__dayName>
          <Scalendar__dayName>чт</Scalendar__dayName>
          <Scalendar__dayName>пт</Scalendar__dayName>
          <Scalendar__dayName $weekend>сб</Scalendar__dayName>
          <Scalendar__dayName $weekend>вс</Scalendar__dayName>
        </Scalendar__daysNames>
        <Scalendar__cells>
          {days.map((day, index) => {
            if (day.isEmpty) {
              return (
                <Scalendar__cell
                  key={`empty-${index}`}
                  $_otherMonth
                ></Scalendar__cell>
              );
            }

            const isWeekend =
              day.date.getDay() === 6 || day.date.getDay() === 0;

            const isCurrentDay =
              day.date.getDate() === today.getDate() &&
              day.date.getMonth() === today.getMonth() &&
              day.date.getFullYear() === today.getFullYear();

            const isSelectedDay =
              selectedDate &&
              day.date.getDate() === selectedDate.getDate() &&
              day.date.getMonth() === selectedDate.getMonth() &&
              day.date.getFullYear() === selectedDate.getFullYear();

            return (
              <Scalendar__cell
                theme={theme}
                key={day.day}
                $_cellDay
                $_weekend={isWeekend}
                $_current={isCurrentDay}
                $_activeDay={isSelectedDay && classActiveDay}
                onClick={() => handleDateClick(day)}
              >
                {day.day}
              </Scalendar__cell>
            );
          })}
        </Scalendar__cells>
      </Scalendar__content>

      <input type="hidden" id="datepick_value" value={dateControl} />
      <Scalendar__period>
        <Scalendar__p theme={theme} $dateEnd>
          {deadlineTask}
          <SdateControl>{dateControl}</SdateControl>.
        </Scalendar__p>
      </Scalendar__period>
    </Scalendar__block>
  );
}
