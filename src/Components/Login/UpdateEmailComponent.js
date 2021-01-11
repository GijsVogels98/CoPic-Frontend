
import React from 'react';
import ReactDOM from 'react-dom';

import AuthService from "../../Services/AuthService";
import Input from "react-validation/build/input";





class UpdateEmailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { passwordOld: '' };
        this.state = { email: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const uploadedBy = currentUser.username;


        console.log(this.state.passwordOld)
        console.log(this.state.email)

        const passwordOld = this.state.passwordOld;
        const email = this.state.email;

        console.log(passwordOld)
        console.log(email)

        AuthService.update_email(
            uploadedBy,
            passwordOld,
            email
        ).then(
            () => {
                alert("Email changed!")
                window.location.reload();
            });
    }

    oldPwHandler = (event) => {
        this.setState({passwordOld: event.target.value});
    }
    newPwHandler = (event) => {
        this.setState({email: event.target.value});
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <p>Old Password</p>
                <input
                    type='password'
                    onChange={this.oldPwHandler}
                />
                <p>New Email</p>
                <input
                    type='email'
                    onChange={this.newPwHandler}
                />
                <input
                    type='submit'
                />
            </form>
        );
    }
}

export default UpdateEmailComponent;