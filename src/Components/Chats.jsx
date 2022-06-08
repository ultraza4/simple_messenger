import React from "react";
import { Outlet } from "react-router-dom";
import ChatUserItem from "./ChatUserItem";
import style from "./Chats.module.css"
import { connect } from "react-redux";
import SignIn from "./SignIn";

const Chats = (props) => {
    let ChatUsers = props.MessagesPage.dialogs.map(m => <ChatUserItem key={m.id} name={m.name} id={m.id} />)

    return (<>
        <main className="container">
            <div className={style.ChatsPage}>
                <div className={style.Chats}>
                    <SignIn />
                    {ChatUsers}
                </div>
                <div className={style.Messages}>
                    <Outlet />
                </div>
            </div>
        </main>
    </>)
}

const mapStateToProps = (state) => {
    return {
        MessagesPage: state.MessagesPage
    }
}

export default connect(mapStateToProps, {})(Chats);