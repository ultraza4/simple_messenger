import React from "react";
import { auth, db } from '../../firebase';
import style from "./SignOut.module.css";
import Button from '@mui/material/Button';

const SignOut = () => {
    const { displayName,uid } = auth.currentUser;

    const signOut = () => {
        auth.signOut();
        db.collection("users").get()
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                if(uid === doc.data().uid) doc.ref.update({isOnline: false});
            })
        })
    }
    
    return (
        <div className={style.header}>
            <div className={style.user_name}>
                {displayName}
            </div>
            <div className={style.button}>
                <Button variant="contained" size="small" onClick={signOut}>Sign Out</Button>
            </div>
        </div>
    )
}

export default SignOut;