import React from "react";
import style from "./MessagesPage.module.css"

const ChatMessage = (props) => {
   return (
      <div className={style.ChatMessage}>{props.message}</div>
   )
}

export default ChatMessage;