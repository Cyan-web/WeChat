import React, { FC } from 'react'

import ChatHeader from '../../../components/chat/ChatHeader'
import ChatContainer from '../../../components/chat/chatMain/ChatContainer'
import { ChatInput } from '../../../container/chat'

const Chat: FC = () => {
    return (
        <div className="chat d-flex flex-column flex-1">
            <ChatHeader/>

            <ChatContainer/>

            <ChatInput/>
        </div>
    )
}

export default Chat
