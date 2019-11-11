import React from 'react';
import {useSelector} from "react-redux";

const Events = ({ year, month, day }) => {
    const { events } = useSelector((state) => state);

    function getTime (date) {
        return new Date(date).getTime();
    }

    function renderEvents (year, month, day) {
        const dayEvents = [];

        for (const event of events) {
            const start = getTime(event.starts),
                end = getTime(event.ends),
                curr = getTime(new Date(year, month, day));

            if (curr <= end && curr >= start) {
                dayEvents.push(
                    <div
                        key={event.id}
                        className={
                            `event
                            ${curr === start ? 'start' : ''}
                            ${curr === end ? 'end' : '' }`
                        }
                    >
                        {/*{curr === start ? event.label : ''}*/}
                        {event.label}
                    </div>
                )
            }
        }

        return dayEvents;
    }

    return renderEvents(year, month, day)
};

export default Events;
