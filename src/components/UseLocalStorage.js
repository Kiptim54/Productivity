import React from 'react';
import { useState, useEffect } from 'react';

const UseLocalStorage = (name, item) => {
    // const [item, setItem] = useState()
    const localStorage = window.localStorage

    useEffect(()=>{
        console.log("calling useEffect in call local storage")
        localStorage.setItem(name, item)
        const storedItem = localStorage.getItem(name)
        console.log(storedItem)
        return storedItem

    })
};

export default UseLocalStorage;
