import React, {Component, createRef, useEffect, useState} from "react";
import {firestore} from "./FireConfig";











const UserFirestore = (collection) =>{


    const currentUser = JSON.parse(localStorage.getItem('user'));

    const uploadedBy = currentUser.username;

    const [docsUser, setDocsUser] = useState([]);





    useEffect(() => {
        const unsubUser = firestore.collection(collection);
        const queryWho = unsubUser.where("uploadedBy", "==", uploadedBy).orderBy('createdAt', 'desc')
            .onSnapshot((snap) =>

            {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocsUser(documents);
            });

        return () => queryWho();


    },[collection])

    return{ docsUser};



}






export default UserFirestore;


