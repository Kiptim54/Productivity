import React, { useState, useEffect } from 'react';
const localStorage = window.localStorage;

const retrieveValues = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    return JSON.parse(localStorage.getItem(key))
};


const useLocalStorage = (key, initialState) => {
    const [state, setState] = useState(initialState);

    useEffect(()=>{
        retrieveValues(key, state)
        console.log(state, "what is the state in the custom hook?")
    }, [state])

    return [state, setState];
};

export default useLocalStorage;
