import React from "react";
import SignIn from "./SignIn";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "./SignOut";
import Chats from "./Chats";

const MainPage = () => {
    const [isUserLogedIn] = useAuthState(auth);
    
    return (<>
        {isUserLogedIn ?
            <main className="container">
                <SignOut />
                <Chats  />
            </main>
            : <SignIn />}
    </>)
}

export default MainPage;