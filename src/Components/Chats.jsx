import React, { useEffect,useState  } from "react";
import { Outlet } from "react-router-dom";
import { auth, db } from "../firebase";
import style from "./Chats.module.css";

const Chats = (props) => {
    const [usersId, setUsersId] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        const { uid, photoURL, displayName } = auth.currentUser;
        db.collection('users').onSnapshot((snapshot) =>{
            setUsersId(snapshot.docs.map((doc) => doc.data().uid));
            setLoading(false);
        }) 
        let isOldUser = usersId.includes(uid);
        if (!isOldUser) {
            if(usersId.length > 0)
            db.collection("users").add({
                uid,
                photoURL,
                displayName,
            })
        }
        debugger;
    },[isLoading]);

    return (<>
        <div className={style.ChatsPage}>
            <div className={style.Chats}>
                {props.ChatUsers}
            </div>
            <div className={style.Messages}>
                <Outlet />
            </div>
        </div>
    </>)
}

export default Chats;
