import React from 'react';
import {useSelector} from "react-redux";
import ControlPane from "./ControlPane";
import Events from "./Events";

const Calendar = () => {
    const { date, events } = useSelector((state) => state);

    const currentDate = new Date(date),
        currentYear = currentDate.getFullYear(),
        currentMonth = currentDate.getMonth();

    function getTime (date) {
        return new Date(date).getTime();
    }

    function monthLength (month) {
        return new Date(currentYear, month, 0).getDate()
    }

    function getEventDuration (event) {
        const timeDifference = getTime(event.ends) - getTime(event.starts);
        return timeDifference / (1000 * 3600 * 24);
    }

    events.sort((a, b) => getTime(a.starts) - getTime(b.starts));
    // events.sort((a, b) => getEventDuration(b) - getEventDuration(a));

    function renderDays () {
        const calendar = [];
        let key = 0;

        function renderMonth (date, start, end, className) {
            for (let day = start; day <= end; day++) {
                calendar.push(
                    <div
                        key={key++}
                        className={`day ${className}`}
                    >
                        {day}
                        <Events
                            year={date.getFullYear()}
                            month={date.getMonth()}
                            day={day}
                        />
                    </div>
                );
            }
        }

        const startOfMonth = new Date(currentYear, currentMonth).getDay(),
            currentMonthFirstDay = startOfMonth === 0 ? 6 : startOfMonth - 1;

        if (currentMonthFirstDay !== 0) {
            const prevMonth = new Date(currentYear, currentMonth - 1),
                numOfDaysPrevMonth = monthLength(currentMonth);

            renderMonth(prevMonth, numOfDaysPrevMonth - currentMonthFirstDay + 1, numOfDaysPrevMonth);
        }

        const daysCount = monthLength(currentMonth + 1);

        renderMonth(currentDate, 1, daysCount, 'current-month');

        const currentMonthLastDay = new Date(currentYear, currentMonth, daysCount).getDay();

        if (currentMonthLastDay !== 0) {
            const nextMonth = new Date(currentYear, currentMonth + 1);
            renderMonth(nextMonth, 1, 7 - currentMonthLastDay);
        }

        return calendar;
    }

    return (
        <div className='calendar'>
            <ControlPane currentDate={currentDate}/>
            <div className='days'>
                {renderDays()}
            </div>
        </div>
    )
};

export default Calendar;