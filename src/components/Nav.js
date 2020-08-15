import React, { useContext, Fragment } from 'react';
import { Link } from '@reach/router';
import { MdLightbulbOutline } from 'react-icons/md';
import { FiMoon, FiMenu } from 'react-icons/fi';
import { ThemeContext } from '../Context/ThemeContext';
import { FaFileSignature } from 'react-icons/fa';
import {Form, FormCheck} from 'react-bootstrap';

function Nav() {
    const { LightTheme, changeTheme } = useContext(ThemeContext);
    return (
        <div className="Nav row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-lg">
                    <Link to="/" className="navbar-brand">
                        Productivitee
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FiMenu />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ml-auto">
                            <Link to="/about" className="nav-item">
                                About
                            </Link>
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
                            {/* TODO: use form-check to toggle night and default mode */}
                            {/* <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Check this switch"
                                />
                            </Form> */}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Nav;
