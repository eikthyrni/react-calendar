import { ActionTypes } from '../../actions';

const initialState = new Date();

function date(state = initialState, action) {
    let date = new Date(state);

    switch (action.type) {
        case ActionTypes.PREV_MONTH:
            return date.setMonth(date.getMonth() - 1);
        case ActionTypes.NEXT_MONTH:
            return date.setMonth(date.getMonth() + 1);
        default:
            return state
    }
}

export default date;