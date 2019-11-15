import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    color: palevioletred;
    font-size: 13px;
    text-transform: capitalize;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid palevioletred;
    outline: 0;
    margin-bottom: 1.2rem;
    padding-top: .5rem;
    height: 1.2rem;
    
    ::placeholder {
        color: #afafaf;
        font-size: 13px;
    }
`;

const FormInput = ({ name, placeholder }) => (
    <>
        <Label>{name}</Label>
        <Input
            name={name}
            placeholder={placeholder}
            autoComplete='off'
        />
    </>
);

export default FormInput;