import React from "react";
import style from "./MessagesPage.module.css"

const ChatMessage = (props) => {
   return (
      <div className={style.messageItem}>
         <div className={style.profielPhoto}>
            <img src={props.photoURL} alt="userProfilePicture" />
         </div>
         <div className={style.ChatMessage}>
            <div className={style.userName}>
               {props.userName}
            </div>
            {props.message}
         </div>
      </div>
   )
}

export default ChatMessage;