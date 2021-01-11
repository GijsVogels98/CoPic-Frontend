import React, {Component, useState} from 'react';
import ProgressBar from "./ProgressBar";



const UploadComponent = () => {

    const [file, setFile] = useState(null);

    const [fileName, setFileName] = useState(null)

    const [error, setError] = useState(null);


    localStorage.setItem('uploadedBy', null);

    const types = ['image/png', 'image/jpeg', 'image/gif'];

    const changeHandler = (e) =>{
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else {
            setFile(null);
            setError("Please select a image (png, jpeg or gif)")
        }
    }


    console.log(fileName);

    return (
        <div>

            <form>
                <div className="form-group">
                    <input type="file" onChange={changeHandler}/>
                </div>
            </form>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{ file.name }</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </div>
    );
}

export default UploadComponent;