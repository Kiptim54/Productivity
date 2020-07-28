import React, { useState, useEffect } from 'react';

const useLocalStorage = (key, value) => {
    const localStorage = window.localStorage;

    const [local, setLocal] = useState(() => {
        const existingLocal = JSON.parse(localStorage.getItem(key)) || value;
        return existingLocal;
    });

    function setValues(key, local) {
        return localStorage.setItem(key, JSON.stringify(local));
    }

    useEffect(() => {
        setValues(key, local);
    }, [local]);

    return [local, setLocal];
};
export default useLocalStorage;

// const localStorage = window.localStorage;

// const retrieveValues = (key, value) => {
//     const todosExist = localStorage.getItem(key)
//     if (todosExist){
//         return JSON.parse(todosExist)
//     }
//     localStorage.setItem(key, JSON.stringify(value));
//     return JSON.parse(localStorage.getItem(key))
// };

// const useLocalStorage = (key, initialState) => {
//     const [state, setState] = useState(initialState);

//     useEffect(()=>{
//         const newState = retrieveValues(key, state)
//         setState(newState)
//         console.log(newState, "what is the state in the custom hook?")
//     }, [])

//     return [state, setState];
// };
