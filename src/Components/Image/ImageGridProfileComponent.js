import React, {useState} from "react";
import ProfileFirestore from "../../Firebase/ProfileFireStore";

const ImageGridProfile = ({setSelectedImg, setSelectedId, setSelectedUser}) => {

    const uploadedBy = localStorage.getItem('uploadedBy' );

    const { docsUser } = ProfileFirestore('images');



        return(
            <div className="img-grid">
                { docsUser && docsUser.map(doc => (
                    <div className="img-wrap" key={doc.id} onClick={() =>
                        setSelectedImg(doc.url) +
                        setSelectedId(doc.id) +
                        setSelectedUser(doc.uploadedBy)
                    }>
                        <img src={doc.url} alt="Uploaded pic" />
                    </div>
                ))}
            </div>
        )




}

export default ImageGridProfile;