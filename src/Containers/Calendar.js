import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as DateHelper from '../utils/DateHelper';
import styled from 'styled-components';
import Week from '../Components/Week';
import Button from "../Components/Button";
import Actions from "../actions";

const Cal = styled.div`
    width: 42rem;
    height: 100vh;
`;

const Header = styled.span`
    color: white;
`;

const ControlPane = styled.div`
    height: 2.5rem;
    background-color: palevioletred;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Weeks = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Calendar = () => {
    const { date } = useSelector((state) => state);
    const dispatch = useDispatch();

    const currentDate = new Date(date),
        weeks = DateHelper.visibleWeeks(date);

    const handlePrevMonth = () => {
        dispatch(Actions.prevMonth())
    };

    const handleNextMonth = () => {
        dispatch(Actions.nextMonth())
    };

    return (
        <Cal>
            <ControlPane>
                <Button
                    text='<'
                    onClick={handlePrevMonth}
                />
                <Header>
                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </Header>
                <Button
                    text='>'
                    onClick={handleNextMonth}
                />
            </ControlPane>
            <Weeks>
                {weeks.map((week) => <Week key={week[0]} week={week} />)}
            </Weeks>
        </Cal>
    )
};

export default Calendar;