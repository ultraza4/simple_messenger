import React from "react";
import { auth } from '../firebase';

const SignOut = () => {
    const { displayName } = auth.currentUser;
    return (
        <div>
            {displayName}
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut;