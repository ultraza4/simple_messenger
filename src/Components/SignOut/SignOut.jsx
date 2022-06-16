import React from "react";
import { auth } from '../../firebase';
import style from "./SignOut.module.css";
import Button from '@mui/material/Button';

const SignOut = () => {
    const { displayName } = auth.currentUser;
    return (
        <div className={style.header}>
            <div className={style.user_name}>
                {displayName}
            </div>
            <div className={style.button}>
                <Button variant="contained" size="small" onClick={() => auth.signOut()}>Sign Out</Button>
            </div>
        </div>
    )
}

export default SignOut;