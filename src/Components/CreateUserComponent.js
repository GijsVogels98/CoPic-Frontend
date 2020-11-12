// import React, {Component} from 'react';
// import {Form} from "react-bootstrap";
//
// class CreateUserComponent extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state ={
//             firstName: '',
//             lastName: '',
//             email: ''
//         }
//
//         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//
//     }
//
//     onChange = e => {
//         const {name,value} = e.target;
//         this.setState({
//             [name]:value
//         })
//     }
//
//     saveUser = (e) => {
//         e.preventDefault();
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Create User</h1>
//                 <Form>
//                     <Form.Group controlId="formGroupPassword">
//                         <Form.Label>Firstname</Form.Label>
//                         //<Form.Control type="text" placeholder="First name" value={this.state.firstName} onChange={changeFirstNameHandler}/>
//                     </Form.Group>
//                     <Form.Group controlId="formGroupPassword">
//                         <Form.Label>Lastname</Form.Label>
//                         <Form.Control type="text" placeholder="Last name" value={this.state.lastName}/>
//                     </Form.Group>
//                     <Form.Group controlId="formGroupEmail">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control type="email" placeholder="Enter email" value={this.state.email}/>
//                     </Form.Group>
//                     <button variant="primary" onClick={this.saveUser}>Save</button>
//                 </Form>
//             </div>
//         );
//     }
// }
//
// export default CreateUserComponent;