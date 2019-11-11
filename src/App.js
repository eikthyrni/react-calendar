import React from 'react';
import EventForm from "./redux/Containers/EventForm";
import Calendar from "./redux/Containers/Calendar";

const App = () => {
    return (
        <>
            <Calendar />
            <EventForm />
        </>
    )
};

export default App;