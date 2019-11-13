import React from 'react';
import FormInput from "../Components/Input";
import Actions from "../actions";
import {useDispatch} from "react-redux";
import styled from 'styled-components';
import Button from '../Components/Button';

const Form = styled.form`
    width: 300px;
    height: 100%;
    border: 1px solid #ebebeb;
    margin-top: 7rem;
    padding: 1.3rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
`;

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
        <Form onSubmit={createEvent}>
            <FormInput
                name='label'
            />
            <FormInput
                name='starts'
                placeholder='YYYY-MM-DD'
            />
            <FormInput
                name='ends'
                placeholder='YYYY-MM-DD'
            />
            <Button text='Submit' />
        </Form>
    )
};

export default EventForm;