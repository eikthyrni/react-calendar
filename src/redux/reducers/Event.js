import { ActionTypes } from '../../actions';

const initialState = [
    {
        id: 0,
        label: 'Sth',
        starts: '2019-11-15T00:00:00',
        ends: '2019-11-18T00:00:00'
    },
    {
        id: 1,
        label: 'отпуск',
        starts: '2019-11-18T00:00:00',
        ends: '2019-11-26T00:00:00'
    },
    {
        id: 2,
        label: 'фестиваль',
        starts: '2019-11-17T00:00:00',
        ends: '2019-11-19T00:00:00'
    },
    {
        id: 3,
        label: 'что-то',
        starts: '2019-11-19T00:00:00',
        ends: '2019-11-19T00:00:00'
    },
    {
        id: 4,
        label: 'AAA',
        starts: '2019-11-18T00:00:00',
        ends: '2019-11-19T00:00:00'
    },
    {
        id: 5,
        label: 'другое',
        starts: '2019-11-19T00:00:00',
        ends: '2019-11-20T00:00:00'
    }
];

function date(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_EVENT:
            return [
                ...state,
                {
                    id: state.length + 1,
                    label: action.payload.label,
                    starts: action.payload.starts,
                    ends: action.payload.ends
                }
            ];
        default:
            return state
    }
}

export default date;