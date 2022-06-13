import React from "react";
import ChatUserItem from "./ChatUserItem";
import { connect } from "react-redux";
import SignIn from "./SignIn";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "./SignOut";
import Chats from "./Chats";

const MainPage = (props) => {
    const [isUserLogedIn] = useAuthState(auth);
    let ChatUsers = props.MessagesPage.dialogs.map(m => <ChatUserItem key={m.id} name={m.name} id={m.id} />)
    
    return (<>
        {isUserLogedIn ?
            <main className="container">
                <SignOut />
                <Chats ChatUsers={ChatUsers}  />
            </main>
            : <SignIn />}
    </>)
}

const mapStateToProps = (state) => {
    return {
        MessagesPage: state.MessagesPage
    }
}

export default connect(mapStateToProps, {})(MainPage);