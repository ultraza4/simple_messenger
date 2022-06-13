import React from "react";
import { Link } from "react-router-dom";
import style from "./Chats.module.css"

const ChatUserItem = (props) => {
    let path = '/MessagesPage/' + props.id;
    return (<>
        <div className={style.ChatItem}>
            <img className={style.user_avatar} src={props.photoURL} alt="user_avatar" />
            <div className={style.user_name}>
                <Link to={path}>{props.name}</Link>
            </div>
        </div>
    </>)
}

export default ChatUserItem;