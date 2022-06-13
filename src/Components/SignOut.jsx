import React from "react";
import {auth} from '../firebase';

const SignOut = () => {
    const {displayName} = auth.currentUser;
    return(
        <div>
            <h3>{displayName}</h3>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut;