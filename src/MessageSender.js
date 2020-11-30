import React,{useState} from 'react'
import './Messagesender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon'
import {useStateValue} from './StateProvider'
import db from './firebase'
import firebase from 'firebase'

function MessageSender() {
    const [{user},dispatch]=useStateValue();
    const [input,setInput]= useState(" ");
    const [imageUrl, setImageUrl]= useState(" ");
    const HandleSubmit=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl
        })
        setInput(" ");
        setImageUrl(" ");

    }
    return (
        <div className="messagesender">
         <div className="messagesender_top">
         <Avatar src={user.photoURL} />
         <form>
             <input type="text" placeholder={`Whats on your mind,${user.displayName}?`} value={input} onChange={(e)=>setInput(e.target.value)} className="typeone" />
             <input  type="text" placeholder="image URL (optional)" value ={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} className="typeone" />
             <button onClick={HandleSubmit} type="submit">Hidden Submit</button>
         </form>
         </div>

    
         <div className="messagesender_bottom">
            <div className="messagesender__option">
              <VideocamIcon style={{color:"red"}} />
              <h3>Live Video</h3>
              <PhotoLibraryIcon style={{color:"green"}} />
              <h3>Photos/Videos</h3>
              <InsertEmotionIcon style={{color:"orange"}} />
              <h3>Feeling</h3>

            </div>
         </div>
        
         </div>

        
            
        
        
    )
}

export default MessageSender
