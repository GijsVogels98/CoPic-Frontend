import React, {useState} from "react";
import UserFirestore from '../../Firebase/UserFireStore'

const ImageGridUser = ({setSelectedImg, setSelectedId, setSelectedUser}) => {


    const { docsUser } = UserFirestore('images');



        return(
            <div className="img-grid">
                { docsUser && docsUser.map(doc => (
                    <div className="img-wrap" key={doc.id} onClick={() =>
                        setSelectedImg(doc.url) +
                        setSelectedId(doc.id) +
                        setSelectedUser(doc.uploadedBy)
                    }>
                        <img src={doc.url} alt={doc.id} />
                    </div>
                ))}
            </div>
        )




}

export default ImageGridUser;