
import React from 'react';
import ReactDOM from 'react-dom';

import AuthService from "../../Services/AuthService";
import Input from "react-validation/build/input";





class UpdatePasswordComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { passwordOld: '' };
        this.state = { passwordNew: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const uploadedBy = currentUser.username;


        console.log(this.state.passwordOld)
        console.log(this.state.passwordNew)

        const passwordOld = this.state.passwordOld;
        const passwordNew = this.state.passwordNew;

        console.log(passwordOld)
        console.log(passwordNew)

        AuthService.update_password(
            uploadedBy,
            passwordOld,
            passwordNew
        ).then(
            () => {
                alert("Password changed!")
                window.location.reload();
            });
    }

    oldPwHandler = (event) => {
        this.setState({passwordOld: event.target.value});
    }
    newPwHandler = (event) => {
        this.setState({passwordNew: event.target.value});
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <p>Old Password</p>
                <input
                    type='password'
                    onChange={this.oldPwHandler}
                />
                <p>New Password</p>
                <input
                    type='password'
                    onChange={this.newPwHandler}
                />
                <input
                    type='submit'
                />
            </form>
        );
    }
}

export default UpdatePasswordComponent;