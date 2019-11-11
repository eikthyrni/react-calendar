import React from 'react';
import Actions from "../../actions";
import {useDispatch} from "react-redux";

const ControlPane = ({ currentDate }) => {
    const dispatch = useDispatch();

    return (
        <div className='control-pane'>
            <button onClick={() => dispatch(Actions.prevMonth())}>⇐</button>
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            <button onClick={() => dispatch(Actions.nextMonth())}>⇒</button>
        </div>
    )
};

export default ControlPane;