import React from "react";
import { Outlet } from "react-router-dom";
import ChatUserItem from "./ChatUserItem";
import style from "./Chats.module.css"

const Chats = () => {
    return (<>
        <main className="container">
            <div className={style.ChatsPage}>
                <div className={style.Chats}>
                    <ChatUserItem />
                    <ChatUserItem />
                    <ChatUserItem />
                </div>
                <div className={style.Messages}>
                    <Outlet />
                </div>
            </div>
        </main>
    </>)
}

export default Chats;