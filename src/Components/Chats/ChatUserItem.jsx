import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Chats.module.css";
import { db, auth } from "../../firebase";

const ChatUserItem = (props) => {
    let path = '/simple_messenger/MessagesPage/' + props.id;
    const [newMessages, setNewMessages] = useState([]);
    const [count, setCount] = useState(0);
    const { uid } = auth.currentUser;
    
    useEffect(() => {
        db.collection("textMessages")
            .onSnapshot((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    if (doc.data().sendTo === uid && doc.data().isNewMessage === true) {
                        setNewMessages((newMessages) => [...newMessages, doc.data()]);
                    }
                })
            });
    },[])
    
    useEffect(() => {
        newMessages.forEach((message) => {
            if (message.uid === props.id) setCount(count => count + 1);
        })
        debugger;
    }, [newMessages]);

    return (<>
        <Link to={path}>
            <div className={props.isActiveUser ? style.ChatItemActive : style.ChatItem}>
                <img className={style.user_avatar} src={props.photoURL} alt="user_avatar" />
                <div className={style.user_name}>
                    {props.name}
                </div>
                <div className={count !== 0 ? style.newMessagesIcon : style.notNewMessages}>
                    {count !== 0 ? count : ""}
                </div>
            </div>
        </Link>
    </>)
}

export default ChatUserItem;