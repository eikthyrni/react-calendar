import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    background-color: palevioletred;
    color: white;
    font-size: 14px;
    border-radius: 3px;
    border-color: transparent;
    outline: 0;
    min-width: 2rem;
    min-height; 2rem;
    padding: .5rem;
    cursor: pointer;
    
    &:hover {
        background-color: #E2779A;
    }
`;

const Button = (props) => {
    return(
        <Btn {...props} >
            {props.text}
        </Btn>
    )
};

export default Button;
