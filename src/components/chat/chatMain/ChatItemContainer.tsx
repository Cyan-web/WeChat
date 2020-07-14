import React, { FC } from 'react'
import Avatar from '@material-ui/core/Avatar'

import ChatItemBase, { IChatItemBaseProps } from './ChatItemBase'

interface IChatItemContainer extends IChatItemBaseProps {
    avatar: string
    content: string
}

const ChatItemContainer: FC<IChatItemContainer> = (
    {
        avatar,
        time,
        username,
        content
    }
) => {
    return (
        <div className="d-flex align-start">
            <Avatar src={avatar} />

            <div className="flex-1 flex-column">
                <ChatItemBase username={username} time={time} />

                <div>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default ChatItemContainer
