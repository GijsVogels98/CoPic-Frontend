import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, DropdownButton, Dropdown} from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user
            });
        }
    }

    logOut() {
        AuthService.logout();
    }




    render() {

        const { currentUser } = this.state;


        return (
            <div>
                <header>
                    <Navbar expand="lg">
                        <Link to={"/"}>
                            <img className="logo" src={process.env.PUBLIC_URL + '/logonormal.png'}/>
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">

                            {currentUser ? (
                                <div className="navbar-nav ml-auto">
                                    <li className="nav-item ">
                                        <Link to={"/upload"} className="nav-link upload">
                                            Upload
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link to={"/profile"} className="nav-link profile">
                                            {currentUser.username}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/logout" className="nav-link logout" onClick={this.logOut}>
                                            LogOut
                                        </a>
                                    </li>
                                </div>
                            ) : (
                                <div className="navbar-nav ml-auto">
                                    <li className="nav-item ">
                                        <Link to={"/login"} className="nav-link login">
                                            Login
                                        </Link>
                                    </li>

                                    <li className="nav-item ">
                                        <Link to={"/register"} className="nav-link register">
                                            Sign Up
                                        </Link>
                                    </li>
                                </div>
                            )}

                            <Nav >
                                <DropdownButton menuAlign="right" id="dropdown-menu-align-right">
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;