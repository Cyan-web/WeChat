import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'

import ChatHeader from '../../../components/chat/ChatHeader'
import ChatContainer from '../../../components/chat/chatMain/ChatContainer'
import { dispatch_getChatHistory } from '../../../store/chat/chat.dispatch'
import { ChatInput } from '../../../container/chat'

interface IChatProps {
    dispatch_getChatHistory: IDispatchHandler<undefined>
}

const Chat: FC<IChatProps> = ({ dispatch_getChatHistory }) => {
    useEffect(() => {
        dispatch_getChatHistory()
    })

    return (
        <div className="chat d-flex flex-column flex-1">
            <ChatHeader/>

            <ChatContainer/>

            <ChatInput/>
        </div>
    )
}

const mapDispatchToProps = {
    dispatch_getChatHistory
}

export default connect(null, mapDispatchToProps)(Chat)
