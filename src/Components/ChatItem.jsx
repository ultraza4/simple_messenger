import React from "react";
import { Link } from "react-router-dom";

const ChatItem = (props) => {
    let path = '/MessegesPage/' + 1;
    return (<>
        <div>
            <Link to={path}>props.name</Link>
        </div>
    </>)
}

export default ChatItem;