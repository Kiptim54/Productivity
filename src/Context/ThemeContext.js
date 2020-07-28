import React, { createContext, useState } from 'react';
import App from '../App';
import useLocalStorage from '../components/useLocalStorage';


export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [LightTheme, setTheme] = useLocalStorage('LightTheme', false)

    const changeTheme = () => {
        setTheme(!LightTheme);
    };

    return (
        <ThemeContext.Provider value={{ LightTheme, changeTheme }}>
            <App />
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
