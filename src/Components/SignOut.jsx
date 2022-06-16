import React from "react";
import { auth } from '../firebase';
import style from "./MainPage.module.css"

const SignOut = () => {
    const { displayName } = auth.currentUser;
    return (
        <div>
            <div className={style.user_name}>
                {displayName}
            </div>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut;