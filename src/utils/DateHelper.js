import Months from './Months'

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

    visibleFrom: (months) => {
        const startDate = months.previous.length() - months.current.firstDay() + 1;

        return months.current.firstDay() === 0 ?
            months.current.firstDate() :
            new Date(months.previous.year, months.previous.month, startDate);
    },

    visibleTo: (months) => {
        const endDate = months.current.length() + 7 - months.current.lastDay();

        return months.current.lastDay() === 0 ?
            months.current.lastDate() :
            new Date(months.current.year, months.current.month, endDate);
    },

    visibleWeeks: function(date) {
        const months = new Months(date);

        const visibleFrom = this.visibleFrom(months),
              visibleTo = this.visibleTo(months);

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
