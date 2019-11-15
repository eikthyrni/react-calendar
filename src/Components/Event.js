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
    
    ${({ borderLeftRadius }) => borderLeftRadius && `
        border-bottom-left-radius: 1rem;
        border-top-left-radius: 1rem;
    `}
    
    ${({ borderRightRadius }) => borderRightRadius && `
        border-bottom-right-radius: 1rem;
        border-top-right-radius: 1rem;
    `}

    ${({ marginLeft }) => marginLeft && `
        margin-left: calc((42rem / 7) * ${marginLeft});
    `}
    
    ${({ marginRight }) => marginRight && `
        margin-right: calc((42rem / 7) * ${marginRight});
    `}
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

    const hasMargin = {
        left: eventStarts > weekStarts && DateHelper.dayFromMonday(event.starts),
        right: eventEnds < weekEnds && DateHelper.daysToSunday(event.ends)
    };

    const hasBorderRadius = {
        left: eventStarts === weekStarts || eventStarts > weekStarts,
        right: eventEnds === weekEnds || eventEnds < weekEnds
    };

    return (
        <EventRow>
            <EventSection
                marginLeft={hasMargin.left}
                marginRight={hasMargin.right}
                borderLeftRadius={hasBorderRadius.left}
                borderRightRadius={hasBorderRadius.right}
            >
                {event.label}
            </EventSection>
        </EventRow>
    );
};

export default Event;