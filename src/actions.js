export const ActionTypes = {
    PREV_MONTH: 'PREV_MONTH',
    NEXT_MONTH: 'NEXT_MONTH',
    ADD_EVENT: 'ADD_EVENT'
};

export default {
    prevMonth: () => {
        return { type: ActionTypes.PREV_MONTH }
    },
    nextMonth: () => {
        return { type: ActionTypes.NEXT_MONTH }
    },
    addEvent: (payload) => {
        return { type: ActionTypes.ADD_EVENT, payload }
    }
}