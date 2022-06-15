import React from "react";
import { Link } from "react-router-dom";
import style from "./Chats.module.css"

const ChatUserItem = (props) => {
    let path = '/MessagesPage/' + props.id;
    return (<>
        <Link to={path}>
            <div className={props.isActiveUser ? style.ChatItemActive : style.ChatItem}>
                <img className={style.user_avatar} src={props.photoURL} alt="user_avatar" />
                <div className={style.user_name}>
                    {props.name}
                </div>
            </div>
        </Link>
    </>)
}

export default ChatUserItem;