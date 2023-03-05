import React from "react";
import SignIn from "../SignIn/SignIn";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "../SignOut/SignOut";
import Chats from "../Chats/Chats";
import style from "./MainPage.module.css"

const MainPage = () => {
    const [isUserLogedIn] = useAuthState(auth);
    
    return (
    <div className={style.mainPage}>
        <div>Task number 3</div>
        {isUserLogedIn ?
            <main className={style.container}>
                <SignOut />
                <Chats  />
            </main>
            : <SignIn />}
    </div>
    )
}

export default MainPage;