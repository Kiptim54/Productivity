import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdLightbulbOutline } from 'react-icons/md';
import { FiMoon } from 'react-icons/fi';
import { ThemeContext } from '../Context/ThemeContext';
import { FaFileSignature } from 'react-icons/fa';

function Nav() {
    const {LightTheme, changeTheme} = useContext(ThemeContext);
    return (
        <div className="Nav">
            <nav>
                <ul>
                    <Link to="/" className="nav-title">
                        Productivity
                    </Link>
                    <Link to="/about">About</Link>
                    {/* <Link to="/contact">Contacts</Link> */}
                    {LightTheme === false ? (
                        <MdLightbulbOutline
                            size="25"
                            color="orange"
                            onClick={() => changeTheme()}
                        />
                    ) : (
                        <FiMoon
                            size="25"
                            color="black"
                            fill="black"
                            onClick={() => changeTheme()}
                        />
                    )}
                    <a></a>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
