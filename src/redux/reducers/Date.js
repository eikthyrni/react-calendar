import { ActionTypes } from '../../actions';
import * as DateHelper from '../../utils/DateHelper';

const initialState = new Date();

function date(state = initialState, action) {
    const date = new Date(state);

    switch (action.type) {
        case ActionTypes.PREV_MONTH:
            return DateHelper.prevMonth(date);
        case ActionTypes.NEXT_MONTH:
            return DateHelper.nextMonth(date);
        default:
            return state
    }
}

export default date;