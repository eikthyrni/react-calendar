import React from 'react';
import Input from "../Components/Input";
import Actions from "../../actions";
import {useDispatch} from "react-redux";

const EventForm = () => {
    const dispatch = useDispatch();

    const createEvent = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target),
            payload = Object.fromEntries(formData);

        payload.starts += 'T00:00:00';
        payload.ends += 'T00:00:00';
        dispatch(Actions.addEvent(payload));
        e.target.reset();
    };

    return (
        <form
            className='event-form'
            onSubmit={createEvent}
        >
            <Input
                name='label'
            />
            <Input
                name='starts'
                placeholder='YYYY-MM-DD'
            />
            <Input
                name='ends'
                placeholder='YYYY-MM-DD'
            />
            <button type='submit'>Submit</button>
        </form>
    )
};

export default EventForm;