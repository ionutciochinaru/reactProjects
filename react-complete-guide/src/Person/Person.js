import React from 'react';
import '../App.css';

const person =( props ) => {
    return (
        <div>
            <h1>I am {props.name}, and i have {props.age} years.</h1>
        </div>
        )
};

export default person;