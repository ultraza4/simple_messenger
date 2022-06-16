import React, { useState, useEffect, useRef } from "react";
import style from "./MessagesPage.module.css"
import ChatMessage from "./ChatMessage";
import SendForm from "../SendForm";
import { auth, db } from "../../firebase";
import { useParams } from "react-router-dom";

const MessagesPage = (props) => {
    const scroll = useRef();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    let { chatId } = useParams();
    const { uid } = auth.currentUser;

    useEffect(() => {
        db.collection("textMessages")
            .orderBy("createdAt")
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => {
                    if (doc.data().uid === uid || doc.data().uid === chatId) {
                        return doc.data();
                    }
                    return [];
                }));
                setLoading(false);
            });
    }, [chatId])

    if (loading) {
        return <h2>Messages are loading...</h2>
    }

    return (<>
        <div className={style.Message}>
            {messages.map((message) => {
                if (message.length !== 0 && (message.sendTo === chatId || message.sendTo === uid)) {
                    return <div key={message.createdAt}>
                        <ChatMessage
                            userName={message.displayName}
                            photoURL={message.photoURL}
                            message={message.text}
                            uid={message.uid} />
                        <div ref={scroll}></div>
                    </div>
                }
            })}
        </div>

        <div className={style.Send_Form}>
            <SendForm sendTo={chatId} scroll={scroll} />
        </div>
    </>)
}

export default MessagesPage;