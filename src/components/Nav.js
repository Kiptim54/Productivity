import React from 'react';
import {Link} from 'react-router-dom';


function Nav(){
    return(
        <div className="Nav">
            <nav>
                <ul>
                    <Link to='/' className="nav-title">Productivity</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contacts</Link>
                </ul>
            </nav>
        </div>
    )

}

export default Nav;