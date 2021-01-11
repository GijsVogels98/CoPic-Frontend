import React, {useEffect, useState} from "react";
import allFirestore from "../../Firebase/AllFireStore";
import {firestore} from "../../Firebase/FireConfig";
import {forEach} from "react-bootstrap/ElementChildren";

const ImageGridAll = ({setSelectedImg, setSelectedUser}) => {
    // const { docs } = allFirestore('images');
    const [docs, setDocs] = useState([]);
    const [search , setSearch] = useState(null);
    const [error , setError] = useState(null)







    const changeHandler = (e) =>{
        setSearch(e.target.value)
    }
    //
    // (e) => setSearch(e.target.value)



    // class getCollection {
    //
    // }

    useEffect((e) => {
        let bool1 = search != null;
        // let bool2 = search == "";
        if(search == ""){
            setSearch(null);
        }

        if(bool1){
             firestore.collection("images").where('tags', "array-contains",search)
                .onSnapshot((snap) => {
                    let documents = [];
                    snap.forEach(doc => {
                        documents.push({...doc.data(), id: doc.id});
                    });
                    setDocs(documents);
                    if (docs.length  >= 1){
                        setError("");
                    }else {
                        setError("Nothing found!");
                    }
                });
        } else{
            setError("");
            firestore.collection("images").orderBy('createdAt', 'desc')
                .onSnapshot((snap) => {
                    let documents = [];
                    snap.forEach(doc => {
                        documents.push({...doc.data(), id: doc.id});
                    });
                    setDocs(documents);
                });
        }
    });



    return(

        <div>
            <img className="bg-img" src={process.env.PUBLIC_URL + '/pexels-nika-akin-3475133 1.png'}/>
            <img className="bg-figure" src={process.env.PUBLIC_URL + '/Vectorgood.png'}/>
            <h1 className="home-text">
                The best free stock photos,<br/>
                with a touch of <span style={{color: "#61C77D"}}>color</span><br/>
                shared by talented creators.
            </h1>
            <input type="text" className="form-control searchbar" placeholder="Search..." onChange={changeHandler}/>
            <div>{error}</div>
            <div className="img-grid">
                { docs && docs.map(doc => (
                    <div className="img-wrap" key={doc.id} onClick={() => setSelectedImg(doc.url)
                        + setSelectedUser(doc.uploadedBy)
                        + localStorage.setItem('uploadedBy', doc.uploadedBy)}>
                        <img src={doc.url} alt="Uploaded pic" />
                    </div>
                ))}
            </div>
        </div>

    )
}
export default ImageGridAll;