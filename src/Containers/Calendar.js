import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import DateHelper from '../utils/DateHelper';
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

    return (
        <Cal>
            <ControlPane>
                <Button
                    text='<'
                    onClick={() => dispatch(Actions.prevMonth())}
                />
                <Header>
                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </Header>
                <Button
                    text='>'
                    onClick={() => dispatch(Actions.nextMonth())}
                />
            </ControlPane>
            <Weeks>
                {weeks.map((week, index) => <Week key={index} week={week} />)}
            </Weeks>
        </Cal>
    )
};

export default Calendar;