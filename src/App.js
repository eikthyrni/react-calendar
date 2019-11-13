import React from 'react';
import EventForm from "./Containers/EventForm";
import Calendar from "./Containers/Calendar";
import styled from 'styled-components';

const Container = styled.div`
        margin-top: 2rem;
        font-family: BlinkMacSystemFont;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        justify-content: space-around;
    `;

const App = () => {
    return (
        <Container>
            <Calendar />
            <EventForm />
        </Container>
    )
};

export default App;