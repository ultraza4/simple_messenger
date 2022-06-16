import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from '../../firebase';
import style from "./SignInPage.module.css";
import Button from '@mui/material/Button';

const SignIn = () => {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <div className={style.SignInPage}>
            <div>
                <div className={style.header}>
                    Welcome to my messanger
                </div>
            </div>
            <div className={style.button}>
                <Button variant="outlined" onClick={signInWithGoogle}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default SignIn;