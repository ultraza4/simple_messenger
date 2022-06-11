import React, {useState, useEffect, useRef} from "react";
import style from "../components/MessagesPage.module.css"
import ChatMessage from "./ChatMessage";
import SendForm from "./SendForm";
import { db } from "../firebase";


const MessagesPage = (props) => {
    const scroll = useRef();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        db.collection("textMessages")
            .orderBy("createdAt")
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()));
                setLoading(false);
            });
    }, [])

    if(loading) {
        return <h2>Messages are loading...</h2>
    }

    return (<>
        <div className={style.Message}>
            {messages.map((message) =>(
                <>
                <div key={message.id}>
                    <ChatMessage photoURL ={message.photoURL} message = {message.text} />
                </div>
                <div  ref={scroll}></div>
                </>
            ))}
        </div>
        <div className={style.Send_Form}>
            <SendForm scroll= {scroll}/>
        </div>
    </>)
}

export default MessagesPage;