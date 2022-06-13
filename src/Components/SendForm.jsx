import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Form, Field } from 'react-final-form';
import {db,auth} from '../firebase';

const SendForm = ({scroll, sendTo}) => {
    
    async function SendMessage(value){
        const {uid, photoURL,displayName} = auth.currentUser;
        await db.collection("textMessages").add({
            text: value.newMessageText,
            uid,
            photoURL,
            displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            sendTo: sendTo
        })
        scroll.current.scrollIntoView({behavior: 'smooth'});
        value.newMessageText = "";
    }

    return (<>
        <Form
            onSubmit={SendMessage}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="newMessageText"
                        component="input" placeholder="Enter your message"
                    />
                    <div>
                        <button>Send Message</button>
                    </div>
                </form>
            )}
        />
    </>)
}

export default SendForm;