import React, { useState, useContext } from 'react';
import Nav from './components/Nav';
import Productivity from './components/Productivity';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ThemeContextProvider, { ThemeContext } from './Context/ThemeContext';
import AppTheme from './UI/AppTheme';

function App() {
    const { LightTheme } = useContext(ThemeContext);
    const theme = LightTheme;

    if (LightTheme) {
        console.log("its a light theme")
        const theme = AppTheme.lightMode;
        console.log(theme)
    } else {
        console.log("its not a light theme")
        const theme = AppTheme.darkMode;
        console.log(theme)
    }

    return (
        <div
            className="App"
            style={{ background: theme.background, color: theme.textColor }}
        >
            {/* <ErrorBoundary> */}
            <Nav />
            <Productivity />
            <Footer />
            {/* </ErrorBoundary> */}
        </div>
    );
}

export default App;
