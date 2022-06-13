import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { auth, db } from "../firebase";
import ChatUserItem from "./ChatUserItem";
import style from "./Chats.module.css";
import { useParams } from "react-router-dom";

const Chats = (props) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    let { chatId } = useParams();

    useEffect(() => {
        const { uid, photoURL, displayName } = auth.currentUser;
        let isOldUser = false;
        
        db.collection('users').onSnapshot((snapshot) => {
            snapshot.docs.forEach((doc) => {
                setUsers((users) => [...users, doc.data()]);
            })
        })

        users.forEach((user) => {
            if (user.uid == uid) isOldUser = true;
        })

        if (!isOldUser) {
            if (users.length > 0)
                db.collection("users").add({
                    uid,
                    photoURL,
                    displayName,
                })
        }
        debugger;
    }, []);

    return (<>
        <div className={style.ChatsPage}>
            <div className={style.Chats}>
                {users.map((user) => {
                    return <ChatUserItem isActiveUser={user.uid === chatId ? true : false} id={user.uid} name={user.displayName} photoURL={user.photoURL} />
                })}
            </div>
            <div className={style.Messages}>
                <Outlet />
            </div>
        </div>
    </>)
}

export default Chats;
