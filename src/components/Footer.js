import React from 'react';

function Footer() {
    const date = new Date()
    return (
        <div className="Footer">
            <p>Productivity Inc</p>
            <sub>{date.getFullYear()}</sub>
        </div>
    );
}

export default Footer;
