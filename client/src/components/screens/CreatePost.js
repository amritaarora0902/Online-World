import React from 'react';


const CreatePost = () =>{
    return (
        <div className="card input-filed"
        style={{margin:"30px auto",
                maxWidth:"500px",
                padding:"20px",
                textAlign:"center"
                }}
        >
            <input type="text" placeholder="title"></input>
            <input type="text" placeholder="body"></input>
            <div className="file-field input-field">
            <div className="btn #6d4c41 brown darken-1">
                <span>Upload Image</span>
                <input type="file" />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <button className="btn waves-effect waves-light #6d4c41 brown darken-1">
                  Submit Post
              </button>
            </div>
    )

}



export default CreatePost;