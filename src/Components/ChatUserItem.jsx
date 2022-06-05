import React from "react";
import { Link } from "react-router-dom";
import style from "./Chats.module.css"
import userPhoto from "../assets/images/user.png"

const ChatUserItem = (props) => {
    let path = '/MessegesPage/' + 1;
    return (<>
        <div className={style.ChatItem}>
            <img className={style.user_avatar} src={userPhoto} alt="user_avatar" />
            <div className={style.user_name}>
                <Link to={path}>props.name</Link>
            </div>
        </div>
    </>)
}

export default ChatUserItem;