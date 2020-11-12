import React, {Component} from 'react';
import {NavDropdown, Table, Button} from "react-bootstrap";
import UserService from "../Services/UserService";

class UserListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

        this.addUser = this.addUser.bind(this);
    }
    componentDidMount() {
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data })
        });
    }

    addUser(){
        this.props.history.push('/add-user');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">
                    User List
                </h2>

                <Button onClick={this.addUser} variant="primary">Create User</Button>
                <row>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(
                                user=>
                                    <tr key={user.id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </row>
            </div>
        );
    }
}

export default UserListComponent;