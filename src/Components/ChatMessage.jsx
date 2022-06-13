import React from "react";
import style from "./MessagesPage.module.css";
import { auth } from "../firebase";

const ChatMessage = (props) => {
   const { uid } = auth.currentUser;
   return (
      <div className={props.uid === uid ? style.messageItemOwnWrapper : style.messageItemWrapper}>
         <div className={style.messageItem}>
            <div className={style.profielPhoto}>
               <img src={props.photoURL} alt="userProfilePicture" />
            </div>
            <div className={style.ChatMessage}>
               <div className={style.userName}>
                  {props.userName}
               </div>
               <div className={style.message}>
                   {props.message}
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChatMessage;