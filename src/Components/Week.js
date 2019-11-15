import React from 'react';
import styled from "styled-components";
import Day from "./Day";
import * as DateHelper from '../utils/DateHelper';
import Event from "./Event";
import {useSelector} from "react-redux";

const WeekWrapper = styled.div`
    min-height: 96px;
    border: 1px solid #ebebeb;
    border-top: 0;
    position: relative;
`;

const LabelsRow = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
`;

const EventsRow = styled.div`
    padding-top: 2.7rem;
`;


const Week = (props) => {
    const { events } = useSelector((state) => state);
    const { week } = props;
    const sortedEvents = DateHelper.sortByWeek(week, events);

    return (
        <WeekWrapper>
            <LabelsRow>
                {week.map((day) => <Day key={day} day={day} /> )}
            </LabelsRow>
            <EventsRow>
                {sortedEvents.map((event) => <Event key={event.id} event={event} week={week} />)}
            </EventsRow>
        </WeekWrapper>
    );
};

export default Week;