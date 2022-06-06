import React from "react";
import {sendMessage} from "../redux/MessagesPageReducer"
import MessagesPage from "./MessagesPage";
import { connect } from "react-redux";

const MessagesPageContainer = (props) => {
    return(<>
        <MessagesPage MessagesPage = {props.MessagesPage} onSendMessage = {props.sendMessage}/>
    </>)
}

const mapStateToProps = (state) => {
    return {
        MessagesPage: state.MessagesPage
    }
}

export default connect(mapStateToProps, {sendMessage} )(MessagesPageContainer);