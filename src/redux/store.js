import { createStore, combineReducers } from 'redux';
import DateReducer from './reducers/Date';
import EventsReducer from './reducers/Event';

const reducers = {
    date: DateReducer,
    events: EventsReducer
};

export default createStore(combineReducers(reducers));