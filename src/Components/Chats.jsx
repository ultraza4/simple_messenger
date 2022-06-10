import React from "react";
import { Outlet } from "react-router-dom";
import ChatUserItem from "./ChatUserItem";
import style from "./Chats.module.css"
import { connect } from "react-redux";
import SignIn from "./SignIn";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "./SignOut";

const Chats = (props) => {
    let ChatUsers = props.MessagesPage.dialogs.map(m => <ChatUserItem key={m.id} name={m.name} id={m.id} />)
    const [isUserLogedIn] = useAuthState(auth);
    return (<>
        {isUserLogedIn ? 
        <main className="container">
            <SignOut />
            <div className={style.ChatsPage}>
                <div className={style.Chats}> 
                    {ChatUsers}
                </div>
                <div className={style.Messages}>
                    <Outlet />
                </div>
            </div>
        </main>
        :<SignIn />}
    </>)
}

const mapStateToProps = (state) => {
    return {
        MessagesPage: state.MessagesPage
    }
}

export default connect(mapStateToProps, {})(Chats);