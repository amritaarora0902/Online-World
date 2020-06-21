import React from 'react';



const Profile = () =>{
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom: "1px solid #6d4c41"
            }}>
                <div>
                  <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                  src="https://images.pexels.com/photos/4316738/pexels-photo-4316738.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </div>
                <div>
                    <h4>Amy Arora</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6>30 Posts</h6>
                        <h6>100 Followers</h6>
                        <h6>125 Following</h6>
                    </div>
                </div>
            </div>
            

            <div className="gallery">
                <img className="item" src="https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <img className="item" src="https://images.pexels.com/photos/399161/pexels-photo-399161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <img className="item" src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <img className="item" src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <img className="item" src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <img className="item" src="https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
        
        </div>
    )
}


export default Profile;