import logo from './logo.svg';
import './App.css';
import 'react-bootstrap'
import {Container, Row, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import firebase from "firebase";





import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import CreateUserComponent from "./Components/CreateUserComponent";

import EnterComponent from "./Components/Login/EnterComponent";
import RegisterComponent from "./Components/Login/RegisterComponent";

import UploadComponent from "./Components/Image/UploadComponent";


import ProfileComponent from "./Components/Login/ProfileComponent";


import AuthService from "./Services/AuthService";
import Modal from "./Components/Image/Model";
import React, {useState} from "react";
import ImageGridUser from "./Components/Image/ImageGridUserComponent";
import ImageGridAll from "./Components/Image/ImageGridAllComponent";
import TagComponent from "./Components/Image/TagComponent";
import UserFirestore from "./Firebase/UserFireStore";
import ImageGridProfile from "./Components/Image/ImageGridProfileComponent";
import HeaderHomeComponent from "./Components/HeaderHomeComponent";
import UpdatePasswordComponent from "./Components/Login/UpdatePasswordComponent";
import UpdateEmailComponent from "./Components/Login/UpdateEmailComponent";



function App() {


    // this.state = {
    //     currentUser: undefined
    // };

    // componentDidMount(){
    //     const user = AuthService.getCurrentUser();
    //
    //     if (user){
    //         this.setState({
    //             currentUser: AuthService.getCurrentUser()
    //         });
    //     }
    // }
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    // let header1 = false;
    // let header2 = false;
    //
    // if (window.location.href == "http:://localhost:3000/home"){
    //     console.log("if")
    //     header1 = true;
    // }else if(window.location.pathname == "/upload" || window.location.pathname == "/profile") {
    //     console.log("else")
    //     header2 =true;
    // }
    //
    // console.log(window.location.pathname)





    return (
        <div className="App">
            <Container fluid>
                <Router>
                        <div className="content-padding">

                            <Switch>
                                <Route path="/login" component={EnterComponent}/>
                                <Route path="/profile" >
                                    <HeaderComponent/>
                                    <ProfileComponent/>
                                </Route>
                                <Route path="/update_password" component={UpdatePasswordComponent} />
                                <Route path="/update_email" component={UpdateEmailComponent} />
                                <Route path="/register" component={RegisterComponent}/>
                                <Route path={`/selected/${selectedUser}`}>
                                    <HeaderComponent/>
                                    <ImageGridProfile/>
                                </Route>
                                <Route path="/upload">
                                    <HeaderComponent/>
                                    <TagComponent/>
                                    <UploadComponent/>
                                    <ImageGridUser setSelectedImg={setSelectedImg} setSelectedId={setSelectedId} setSelectedUser={setSelectedUser}/>
                                    {selectedImg && <Modal selectedImg={selectedImg} selectedId={selectedId} setSelectedUser={setSelectedUser} selectedUser={selectedUser} setSelectedImg={setSelectedImg} />}
                                </Route>
                                <Route path="/">
                                    <HeaderHomeComponent/>
                                    <Redirect to="/home" />
                                    <ImageGridAll setSelectedImg={setSelectedImg} setSelectedUser={setSelectedUser}/>
                                    {selectedImg && <Modal selectedImg={selectedImg} setSelectedUser={setSelectedUser} selectedUser={selectedUser} setSelectedImg={setSelectedImg} />}
                                </Route>
                            </Switch>
                        </div>

                    <FooterComponent/>
                </Router>
            </Container>
        </div>
    );
}

export default App;


