import DateHelper from "../utils/DateHelper";
import React from "react";
import styled from "styled-components";

const EventSection = styled.div`
    background: palevioletred;
    color: white;
    opacity: .9;
    padding: .2rem;
    padding-left: .6rem;
    font-size: 12px;
    height: .9rem;
    border-bottom-left-radius: ${props => props.leftBorder ? '1rem' : '0'};
    border-top-left-radius: ${props => props.leftBorder ? '1rem' : '0'};
    border-bottom-right-radius: ${props => props.rightBorder ? '1rem' : '0'};
    border-top-right-radius: ${props => props.rightBorder ? '1rem' : '0'};
    margin-left: calc((42rem / 7) * ${props => props.leftOffset});
    margin-right: calc((42rem / 7) * ${props => props.rightOffset});
`;

const EventRow = styled.div`
    margin: .3rem 0;

    &:last-child {
        margin-bottom: .8rem;
    }
`;

const Event = (props) => {
    const { event, week } = props;

    const eventStarts = DateHelper.getTime(event.starts),
        eventEnds = DateHelper.getTime(event.ends),
        weekStarts = week[0],
        weekEnds = week[6];

    const daysFromMonday = DateHelper.dayFromMonday(event.starts),
        daysToSunday = DateHelper.daysToSunday(event.ends);

    const leftOffset = eventStarts > weekStarts ? daysFromMonday : 0,
        rightOffset = eventEnds < weekEnds ? daysToSunday : 0,
        leftBorder = eventStarts === weekStarts || leftOffset,
        rightBorder = eventEnds === weekEnds || rightOffset;

    return (
        <EventRow key={event.id}>
            <EventSection
                leftBorder={leftBorder}
                rightBorder={rightBorder}
                leftOffset={leftOffset}
                rightOffset={rightOffset}
            >
                {event.label}
            </EventSection>
        </EventRow>
    );
};

export default Event;