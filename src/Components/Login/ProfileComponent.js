


import React, { Component } from 'react';
import AuthService from '../../Services/AuthService';
import {Link} from "react-router-dom";

class ProfileComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }

    deleteAccount = (event) => {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const id = currentUser.id;
        AuthService.delete(id)
        AuthService.logout();
    }

    render() {

        const { currentUser } = this.state;


        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>{currentUser.username}</strong> Profile
                    </h3>
                </header>
                <p>
                    <strong>Token:</strong>{" "}
                    {currentUser.accessToken.substring(0, 20)} ...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {currentUser.email}
                </p>
                <p>
                    <Link to={"/update_password"}>
                        <button>Update password</button>
                    </Link>
                </p>
                <p>
                    <Link to={"/update_email"}>
                        <button>Update email</button>
                    </Link>
                </p>
                <p>
                    <Link to={"/"}>
                        <button onClick={this.deleteAccount} className="btn-danger">Delete Account</button>
                    </Link>
                </p>
            </div>
        );
    }
}

export default ProfileComponent;

