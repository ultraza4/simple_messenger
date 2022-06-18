import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Chats.module.css";
import { db, auth } from "../../firebase";

const ChatUserItem = (props) => {
    let path = '/simple_messenger/MessagesPage/' + props.id;
    const [count, setCount] = useState(0);
    const { uid } = auth.currentUser;

    const resetNewMessages = () => {
        db.collection("textMessages").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().sendTo === uid && doc.data().uid === props.id) {
                    setCount(0);
                    doc.ref.update({
                        isNewMessage: false
                    });
                }
            });
        });
    }

    useEffect(() => {
        db.collection("textMessages")
            .get().then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    if (doc.data().sendTo === uid && doc.data().isNewMessage === true) {
                        if (doc.data().uid === props.id) setCount(count => count + 1);
                    }
                })
            });
    }, [])

    return (<>
        <Link onClick={resetNewMessages} to={path}>
            <div className={props.isActiveUser ? style.ChatItemActive : style.ChatItem}>
                <img className={style.user_avatar} src={props.photoURL} alt="user_avatar" />
                <div className={style.user_name}>
                    {props.name} 
                    <div className={props.isOnline === true ? style.isOnline : style.notOnline}>
                        online
                    </div>
                </div>
                <div className={count !== 0 ? style.newMessagesIcon : style.notNewMessages}>
                    {count !== 0 ? count : ""}
                </div>
            </div>
        </Link>
    </>)
}

export default ChatUserItem;