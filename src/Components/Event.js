import * as DateHelper from "../utils/DateHelper";
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
    ${props => props.margin}
    ${props => props.borderRadius}
`;

const EventRow = styled.div`
    margin: .3rem 0;

    &:last-child {
        margin-bottom: .8rem;
    }
`;

const Event = (props) => {
    const { event, week } = props;

    const eventStarts = DateHelper.getTime(event.starts);
    const eventEnds = DateHelper.getTime(event.ends);
    const weekStarts = week[0];
    const weekEnds = week[6];

    const daysFromMonday = DateHelper.dayFromMonday(event.starts);
    const daysToSunday = DateHelper.daysToSunday(event.ends);

    const hasMargin = () => (
        eventEnds < weekEnds ? `margin-right: calc((42rem / 7) * ${daysToSunday});` :
        eventStarts > weekStarts ? `margin-left: calc((42rem / 7) * ${daysFromMonday});` : ''
    );

    const hasBorderRadius = () => (
        eventStarts === weekStarts || eventStarts > weekStarts ?
            'border-bottom-left-radius: 1rem;' +
            'border-top-left-radius: 1rem;' :
        eventEnds === weekEnds || eventEnds < weekEnds ?
            'border-bottom-right-radius: 1rem;' +
            'border-top-right-radius: 1rem;' : ''
    );

    return (
        <EventRow>
            <EventSection
                margin={hasMargin}
                borderRadius={hasBorderRadius}
            >
                {event.label}
            </EventSection>
        </EventRow>
    );
};

export default Event;