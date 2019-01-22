import React from 'react';

const person =( props ) => {
    return (
        <div>
            <h1>I am {props.name}, and i am {props.age}.</h1>
        </div>
        );
};

export default person;