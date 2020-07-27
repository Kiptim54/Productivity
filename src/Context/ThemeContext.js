import React, { createContext, useState } from 'react';
import App from '../App';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [LightTheme, setTheme] = useState(true);

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
