import React,{useState} from 'react';
import M from 'materialize-css';
import {useHistory} from 'react-router-dom';

const CreatePost = () =>{
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")

    const postDetails = () => {
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","Online-World")
        data.append("cloud_name","dlpfqmpuz")
        fetch("https://api.cloudinary.com/v1_1/dlpfqmpuz/image/upload",{
            method: "post",
            body: data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                title,
                body,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
             M.toast({html: data.error,classes:"#e53935 red darken-1"})
            }
            else{
                M.toast({html:"Post Created",classes:"#43a047 green darken-1"})
                history.push('/')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    
    return (
        <div className="card input-filed"
        style={{margin:"30px auto",
                maxWidth:"500px",
                padding:"20px",
                textAlign:"center"
                }}
        >
            <input type="text"
             placeholder="title"
             value={title}
             onChange={(e)=>setTitle(e.target.value)}></input>

            <input type="text"
             placeholder="body"
             value={body}
             onChange={(e)=>setBody(e.target.value)}></input>

            <div className="file-field input-field">
            <div className="btn #6d4c41 brown darken-1">
                <span>Upload Image</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <button className="btn waves-effect waves-light #6d4c41 brown darken-1"
            onClick={()=>postDetails()}>
                  Submit Post
              </button>
            </div>
    )

}



export default CreatePost;