import React, { useState, useEffect } from 'react';

const useLocalStorage = (key, value) => {
    const localStorage = window.localStorage;
    value = JSON.stringify(value)

    const [local, setLocal] = useState(() => {
        const existingLocal = JSON.parse(localStorage.getItem(key) || value);
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
