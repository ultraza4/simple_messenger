import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Form, Field } from 'react-final-form';
import {db,auth} from '../firebase';

const SendForm = ({scroll}) => {

    async function SendMessage(value){
        const {uid} = auth.currentUser;

        await db.collection("textMessages").add({
            text: value.newMessageText,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        scroll.current.scrollIntoView({behavior: 'smooth'});
        value.newMessageText = "";
    }

    return (<>
        <Form
            onSubmit={SendMessage}
            render={({ handleSubmit,reset }) => (
                <form onSubmit={event => {handleSubmit(event).then(reset)}}>
                    <Field name="newMessageText"
                        component="input" placeholder="Enter your message"
                    />
                    <div>
                        <button onClick={reset}>Send Message</button>
                    </div>
                </form>
            )}
        />
    </>)
}

export default SendForm;