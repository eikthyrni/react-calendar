import Dates from './Dates'

export default {
    MILLISECONDS_IN_DAY: (24 * 60 * 60 * 1000),

    getTime: (date) => {
        return new Date(date).getTime()
    },

    getEventDuration: function(event) {
        const timeDifference = this.getTime(event.ends) - this.getTime(event.starts);
        return timeDifference / this.MILLISECONDS_IN_DAY;
    },

    prevMonth: (date) => {
        const dateObj = new Date(date);
        return dateObj.setMonth(dateObj.getMonth() - 1)
    },

    nextMonth: (date) => {
        const dateObj = new Date(date);
        return dateObj.setMonth(dateObj.getMonth() + 1)
    },

    monthLength: (date) => {
        const dateObj = new Date(date),
            lastDateOfMonth = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0);

        return lastDateOfMonth.getDate()
    },

    visibleFrom: (dates) => {
        const startDate = dates.previous.length() - dates.current.firstDay() + 1;

        return dates.current.firstDay() === 0 ?
            dates.current.firstDate() :
            new Date(dates.previous.year, dates.previous.month, startDate);
    },

    visibleTo: (dates) => {
        const endDate = dates.current.length() + 7 - dates.current.lastDay();

        return dates.current.lastDay() === 0 ?
            dates.current.lastDate() :
            new Date(dates.current.year, dates.current.month, endDate);
    },

    visibleWeeks: function(date) {
        const dates = new Dates(date);

        const visibleFrom = this.visibleFrom(dates),
              visibleTo = this.visibleTo(dates);

        let fromDateTime = this.getTime(visibleFrom),
            toDateTime = this.getTime(visibleTo);

        const days = [],
            sortedDays = [];

        while (fromDateTime <= toDateTime) {
            days.push(fromDateTime);
            let date = new Date(fromDateTime);
            fromDateTime = date.setDate(date.getDate() + 1);

            if (days.length === 7) {
                sortedDays.push(days.splice(0, 7));
            }
        }

        return sortedDays
    },

    sortByWeek: function(week, events) {
        const weekStarts = week[0],
            weekEnds = week[6],
            sortedEvents = [];

        for (const event of events) {
            const eventStarts = this.getTime(event.starts),
                eventEnds = this.getTime(event.ends);

            const rangesOverlapping = weekStarts <= eventEnds && eventStarts <= weekEnds;

            if (rangesOverlapping) {
                sortedEvents.push(event);
            }
        }

        sortedEvents.sort((a, b) => this.getEventDuration(b) - this.getEventDuration(a));
        return sortedEvents
    },

    dayFromMonday: function(date) {
        const day = new Date(date).getDay();
        return day === 0 ? 6 : day - 1
    },

    daysToSunday: function(date) {
        const day = new Date(date).getDay();
        return 7 - day;
    }
}
