import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

class NavBar extends Component {
    render() {
        let cookies = null;
        let user = '';
        cookies = Cookies.get('talentAuthToken');
        console.log(cookies);
        if (cookies) {
            user = jwtDecode(cookies).username;
            console.log(user);
        }

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">DemoJWT</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {cookies ? <React.Fragment><li className="nav-item active">
                            <NavLink className="nav-link" to="/welcome">
                                {user} <span className="sr-only" />
                            </NavLink>
                        </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/logout">
                                    Logout <span className="sr-only" />
                                </NavLink>
                            </li></React.Fragment> :
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">LogIn</NavLink>
                            </li>
                        }
                    </ul>
                </div>
            </nav>);
    }

}

export default NavBar;