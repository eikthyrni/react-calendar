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

    ${({ borderRadius }) => {
        const leftBorderRadius = `${borderRadius.left && 1}rem`;
        const rightBorderRadius = `${borderRadius.right && 1}rem`;

        return borderRadius && `
            border-bottom-left-radius: ${leftBorderRadius};
            border-top-left-radius: ${leftBorderRadius};
            border-bottom-right-radius: ${rightBorderRadius};
            border-top-right-radius: ${rightBorderRadius};
        `
    }}

    ${({ margin }) => {
        const leftMargin = `calc((42rem / 7) * ${margin.left})`;
        const rightMargin = `calc((42rem / 7) * ${margin.right})`;

        return margin && `
            margin-left: ${leftMargin};
            margin-right: ${rightMargin};
        `
    }}
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
                margin={hasMargin}
                borderRadius={hasBorderRadius}
            >
                {event.label}
            </EventSection>
        </EventRow>
    );
};

export default Event;