import DateHelper from './DateHelper'

export default class Dates {
    constructor(date) {
        this.current = this.getMonthParams(date);
        this.previous = this.getMonthParams(DateHelper.prevMonth(date));
        this.next = this.getMonthParams(DateHelper.nextMonth(date));
    }

    getMonthParams(date) {
        const dateObj = new Date(date);

        return {
            dateObj: dateObj,
            month: dateObj.getMonth(),
            year: dateObj.getFullYear(),
            firstDate: function() { return new Date(this.year, this.month) },
            lastDate: function() { return new Date(this.year, this.month, this.length()) },
            length: function() { return DateHelper.monthLength(this.dateObj)},
            firstDay: function() { return DateHelper.dayFromMonday(this.firstDate()) },
            lastDay: function() { return this.lastDate().getDay() }
        }
    }
}
