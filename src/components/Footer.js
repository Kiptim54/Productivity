import React from 'react';

function Footer() {
    const date = new Date()
    return (
        <div className="Footer">
            <h4>Productivity Inc</h4>
            <sub>{date.getFullYear()}</sub>
        </div>
    );
}

export default Footer;
