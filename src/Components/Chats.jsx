import React, { useEffect,useState  } from "react";
import { Outlet } from "react-router-dom";
import { auth, db } from "../firebase";
import ChatUserItem from "./ChatUserItem";
import style from "./Chats.module.css";

const Chats = (props) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const { uid, photoURL, displayName } = auth.currentUser;
        let isOldUser = false;
        db.collection('users').onSnapshot((snapshot) =>{
            setUsers(snapshot.docs.map((doc) => doc.data()));
            setLoading(false);
        })
        
        for(let i = 0; users.length > i; i++){
            if(users[i].uid === uid){
                isOldUser  = true;
            }
        }
        
        if (!isOldUser) {
            if(users.length > 0)
            db.collection("users").add({
                uid,
                photoURL,
                displayName,
            })
        }
    },[isLoading]);

    return (<>
        <div className={style.ChatsPage}>
            <div className={style.Chats}>
                {users.map((user) =>{
                    return <ChatUserItem id = {user.uid} name ={user.displayName} photoURL ={user.photoURL} />
                })}
            </div>
            <div className={style.Messages}>
                <Outlet />
            </div>
        </div>
    </>)
}

export default Chats;
