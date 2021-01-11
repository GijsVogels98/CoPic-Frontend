import React, {useState, useEffect, Component} from 'react';
import { projectstorage, firestore , timestamp} from "./FireConfig";
import AuthService from "../Services/AuthService";






const useStorage = (file) => {

    const currentUser = JSON.parse(localStorage.getItem('user'));
    const tags = JSON.parse(localStorage.getItem('tags'));
    const uploadedBy = currentUser.username;

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);






    useEffect(() =>{

        //references
        const storageRef = projectstorage.ref(file.name);
        const collectionRef = firestore.collection('images');



        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp;
            await collectionRef.add({ url, createdAt, uploadedBy, tags});
            setUrl(url);
        })
    }, [file]);

    return{ progress, error, url}
}









export default useStorage;