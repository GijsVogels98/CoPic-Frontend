import React, {useState} from "react";
import FireService from "../../Services/FireService";
import {Link} from "react-router-dom";

const Modal = ( { selectedImg, setSelectedImg, selectedId, selectedUser, setSelectedUser} ) => {


    const currentUser = JSON.parse(localStorage.getItem('user'));

    let show;
    if(currentUser){
        if (currentUser.username == selectedUser && window.location.pathname != "/home"){
            show = true;
        }
    }
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
            localStorage.setItem('uploadedBy', null)
        }
    }

    const profileClick = (e) => {
        setSelectedImg(null);
    }

    const deleteClick = (e) => {
        FireService.delete(selectedId).then(e => {console.log("succes")});
        setSelectedImg(null);
    }



    return(
        <div className="backdrop" onClick={handleClick}>
            <div className="background">
                <Link to={`/selected/${selectedUser}`} onClick={profileClick} className="nav-link user">
                    Uploaded by : {selectedUser}
                </Link>
                {show && <button name="delete" className="btn-danger" onClick={deleteClick}>Delete Image</button>}
                <img src={selectedImg} alt="Enlarged picture"/>
            </div>
        </div>

    )

}




export default Modal;