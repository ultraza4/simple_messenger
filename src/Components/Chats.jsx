import React from "react";
import { Outlet } from "react-router-dom";
import ChatItem from "./ChatItem";
import style from "./Chats.module.css"

const Chats = () => {
    return (<>
        <main className="container">
            <div className={style.ChatsPage}>
                <div className={style.Chats}>
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                </div>
                <div className={style.Messeges}>
                    <Outlet />
                </div>
            </div>
        </main>
    </>)
}

export default Chats;