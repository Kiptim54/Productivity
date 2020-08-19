import React, { useContext } from 'react';
import Nav from './components/Nav';
import Productivity from './components/Productivity';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeContext } from './Context/ThemeContext';
import AppTheme from './UI/AppTheme';
import { Router } from '@reach/router';
import About from './components/About';
import Hooksform from './HooksForm/Hooksform';

function App() {
    const { LightTheme } = useContext(ThemeContext);
    let theme = AppTheme.lightMode;

    if (LightTheme) {
        theme = AppTheme.lightMode;
    } else {
        theme = AppTheme.darkMode;
    }

    return (
        <div
            className="App container-fluid"
            style={{ background: theme.background, color: theme.textColor }}
        >
            {/* <ErrorBoundary> */}
            <Nav />

            <Router>
                <Productivity path="/" />
                <About path="/about" />
                <Hooksform path="/hooks-form" />
            </Router>
            <Footer />
            {/* </ErrorBoundary> */}
        </div>
    );
}

export default App;
