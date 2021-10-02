import React,{useState, useEffect} from 'react'
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { db } from '../firebase';
import firebase from 'firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase';
import { useDispatch } from 'react-redux';
import { enterCount } from '../features/appSlice';
var Cadd=0;
function ChatInput({channelName,channelId,chatRef}){
    const dispatch =useDispatch();
    const [input,setInput]=useState('');
    const [user]=useAuthState(auth);
    
    const sendMessage=(e)=>{
        e.preventDefault();//prevent refresh
        if(!channelId ){
            return false;
        }
       Cadd++;
       dispatch(enterCount({
           add: Cadd
       }))

        db.collection('rooms').doc(channelId).collection('messages').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userImage:user.photoURL,
        });


        chatRef.current.scrollIntoView({
            behaviour:"smooth",
        });

        setInput('');


        
    };

    return(
        <ChatInputContainer>
            <form>
                <input value={input}
                onChange={e=>setInput(e.target.value)}
                
                
                placeholder={`Message ${channelName} `}/>
            <Button hidden type='submit' onClick={sendMessage}  >
                    Send
                </Button>
               
                 

            </form>

        </ChatInputContainer>
    )
}
export default ChatInput;
const ChatInputContainer=styled.div`

border-radius: 20px;
>form{
    position: relative;
    display:flex;
    justify-content: center;
}


>form>input{
    position: fixed;
    bottom:30px;
    width: 60%;
    border:1px solid gray;
    border-radius:3px;
    padding: 20px;
    outline: none;
}
>form>button{
display:none!important;
}

`;
