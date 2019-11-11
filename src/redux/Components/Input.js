import React from 'react';

const Input = ({ name, placeholder }) => {
    return (
        <>
            <label>{name}</label>
            <input
                name={name}
                placeholder={placeholder}
                autoComplete='off'
            />
        </>
    )
};

export default Input;