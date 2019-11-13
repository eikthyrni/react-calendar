import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import {useSelector} from "react-redux";

const DayWrapper = styled.div`
    border: 1px solid #ebebeb;
    text-align: center;
    padding-top: 5px;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.color};
    flex-grow: 1;
    flex-basis: 0;
    text-align: right;
    padding: .8rem;
`;

const currentMonth = {
    bg: 'white',
    color: 'black'
};

const mutedMonth = {
    bg: '#f1f1f1',
    color: '#afafaf'
};

const Day = (props) => {
    const { date } = useSelector((state) => state);
    const { day } = props;

    const thisDay = new Date(day);

    const dayInCurrentMonth = thisDay.getMonth() === new Date(date).getMonth();

    return (
        <ThemeProvider
            theme={dayInCurrentMonth ? currentMonth : mutedMonth}
        >
            <DayWrapper>
                {thisDay.getDate()}
            </DayWrapper>
        </ThemeProvider>
    );
};

export default Day;