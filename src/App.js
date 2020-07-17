import React from 'react';
import Nav from './components/Nav';
import Productivity from './components/Productivity';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
    return (
        <div className="App">
            {/* <ErrorBoundary> */}
                <Nav />
                <Productivity />
                <Footer />
            {/* </ErrorBoundary> */}
        </div>
    );
}

export default App;
