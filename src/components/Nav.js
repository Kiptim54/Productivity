import React from 'react';
// import {Link} from 'react-dom';


function Nav(){
    return(
        <div className="Nav">
            <nav>
                <ul>
                    <li class="nav-title"><a href="">Productivity</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>

                    {/* <Link to='/' class="nav-title">Productivity</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contacts</Link> */}
                </ul>
            </nav>
        </div>
    )

}

export default Nav;