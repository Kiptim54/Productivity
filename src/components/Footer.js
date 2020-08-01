import React from 'react';

function Footer() {
    const date = new Date();
    return (
        <div className="row Footer">
            <div className="col-md-12">
                <div className="">
                    <p>Productivitee Inc</p>
                    <sub>{date.getFullYear()}</sub>
                </div>
            </div>
        </div>
    );
}

export default Footer;
