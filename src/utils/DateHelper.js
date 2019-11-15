const MILLISECONDS_IN_DAY = (24 * 60 * 60 * 1000);

export const getTime = (date) => new Date(date).getTime();

const getEventDuration = (event) => {
    const timeDifference = getTime(event.ends) - getTime(event.starts);
    return timeDifference / MILLISECONDS_IN_DAY;
};

const nextDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.setDate(dateObj.getDate() + 1)
};

export const prevMonth = (date) => {
    const dateObj = new Date(date);
    return dateObj.setMonth(dateObj.getMonth() - 1)
};

export const nextMonth = (date) => {
    const dateObj = new Date(date);
    return dateObj.setMonth(dateObj.getMonth() + 1)
};

export const monthLength = (date) => {
    const dateObj = new Date(date);
    const lastDateOfMonth = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0);

    return lastDateOfMonth.getDate()
};

const firstDate = (date) => {
    const dateObj = new Date(date);
    return new Date(dateObj.getFullYear(), dateObj.getMonth())
};

const lastDate = (currentDate) => {
    const dateObj = new Date(currentDate);
    return new Date(dateObj.getFullYear(), dateObj.getMonth(), monthLength(dateObj))
};

const firstDay = (date) => dayFromMonday(firstDate(date));

const lastDay = (currentDate) => lastDate(currentDate).getDay();

const visibleFrom = (currentDate) => {
    const previousMonth = new Date(prevMonth(currentDate));
    const currentMonthFirstDay = firstDay(currentDate);
    const startDate = monthLength(previousMonth) - currentMonthFirstDay + 1;

    return currentMonthFirstDay === 0 ?
        firstDate(currentDate) :
        new Date(previousMonth.getFullYear(), previousMonth.getMonth(), startDate);
};

const visibleTo = (currentDate) => {
    const currentMonthLastDay = lastDay(currentDate);
    const endDate = monthLength(currentDate) + 7 - currentMonthLastDay;

    return currentMonthLastDay === 0 ?
        lastDate(currentDate) :
        new Date(currentDate.getFullYear(), currentDate.getMonth(), endDate);
};

export const visibleWeeks = (date) => {
    const currentDate = new Date(date);

    let fromDateTime = getTime(visibleFrom(currentDate));
    let toDateTime = getTime(visibleTo(currentDate));

    const days = [];
    const sortedDays = [];

    while (fromDateTime <= toDateTime) {
        days.push(fromDateTime);
        let date = new Date(fromDateTime);
        fromDateTime = nextDate(date);

        if (days.length === 7) {
            sortedDays.push(days.splice(0, 7));
        }
    }

    return sortedDays
};

export const sortByWeek = (week, events) => {
    const weekStarts = week[0];
    const weekEnds = week[6];
    const sortedEvents = [];

    for (const event of events) {
        const eventStarts = getTime(event.starts);
        const eventEnds = getTime(event.ends);

        const rangesOverlapping = weekStarts <= eventEnds && eventStarts <= weekEnds;

        if (rangesOverlapping) {
            sortedEvents.push(event);
        }
    }

    sortedEvents.sort((a, b) => getEventDuration(b) - getEventDuration(a));
    return sortedEvents
};

export const dayFromMonday = (date) => {
    const day = new Date(date).getDay();
    return day === 0 ? 6 : day - 1
};

export const daysToSunday = (date) => {
    const day = new Date(date).getDay();
    return 7 - day;
};
