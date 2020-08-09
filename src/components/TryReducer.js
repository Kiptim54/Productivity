import React, { useState, useReducer } from 'react';

const reducer = (counter, action) => {
    switch (action.type) {
        case 'increment':
            console.log('it is an increment');
            return (counter += 1);
        case 'decrement':
            return (counter -= 1);
        default:
            return counter;
    }
};

const TryReducer = (props) => {
    // const [counter, setCounter] = useState(0);
    const [counter, dispatch] = useReducer(reducer, 0);

    const addCounter = () => {
        return dispatch({ type: 'increment' });
    };

    const subtractCounter = () => {
        dispatch({ type: 'decrement' });
    };
    return (
        <div className="container">
            Counter: {counter}
            <button className="btn bg-white m-1" onClick={addCounter}>
                Add
            </button>
            <button className="btn bg-white m-1" onClick={subtractCounter}>
                Subtract
            </button>
        </div>
    );
};

export default TryReducer;
