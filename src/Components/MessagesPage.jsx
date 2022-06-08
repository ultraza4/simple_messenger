import React from "react";
import style from "../components/MessagesPage.module.css"
import ChatMessage from "./ChatMessage";
import { Form, Field } from 'react-final-form'

const MessagesPage = (props) => {

    let ChatMessages = props.MessagesPage.messages.map(m => <ChatMessage key={m.id} message={m.message} id={m.id} />)

    let SendMessage = (value) => {
        props.onSendMessage(value.newMessageText)
    }

    return (<>
        <div className={style.Message}>
            {ChatMessages}
        </div>
        <div className={style.Send_Form}>
            <Form
                onSubmit={SendMessage}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="newMessageText"
                            component="textarea" placeholder="Enter your message"
                        />
                        <div>
                            <button>Send Message</button>
                        </div>
                    </form>
                )}
            />
        </div>
    </>)
}

export default MessagesPage;