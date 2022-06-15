import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { auth, db } from "../firebase";
import ChatUserItem from "./ChatUserItem";
import style from "./Chats.module.css";
import { useParams } from "react-router-dom";

const Chats = (props) => {
    const [users, setUsers] = useState([]);
    const [isOldUser, setOldUser] = useState(false);
    let { chatId } = useParams();

    useEffect(() => {
        const { uid, photoURL, displayName } = auth.currentUser;
        db.collection('users').get()
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                if(users.length === 0 && doc.data().uid !== uid) setUsers((users) => [...users, doc.data()]);
                if(doc.data().uid === uid) setOldUser(true);
            })
        })
        
        if ((!isOldUser) && (users.length > 0)) {
            db.collection("users").add({
                uid,
                photoURL,
                displayName,
            })
        }
    }, [users,isOldUser]);

    return (<>
        <div className={style.ChatsPage}>
            <div className={style.Chats}>
                {users.map((user) => {
                    return  <ChatUserItem isActiveUser={user.uid === chatId ? true : false} id={user.uid} name={user.displayName} photoURL={user.photoURL} />
                })}
            </div>
            <div className={style.Messages}>
                <Outlet />
            </div>
        </div>
    </>)
}

export default Chats;