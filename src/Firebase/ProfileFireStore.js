import {useEffect, useState} from "react";
import {firestore} from "./FireConfig";


const ProfileFirestore = (collection) =>{


    const currentUser = localStorage.getItem('uploadedBy');



    const [docsUser, setDocsUser] = useState([]);


    useEffect(() => {
        const unsubUser = firestore.collection(collection);
        const queryWho = unsubUser.where("uploadedBy", "==", currentUser).orderBy('createdAt', 'desc')
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






export default ProfileFirestore;