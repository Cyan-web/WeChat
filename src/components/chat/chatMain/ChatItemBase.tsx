import React, { FC } from 'react'

export interface IChatItemBaseProps {
    time: string
    username: string
}

const ChatItemBase: FC<IChatItemBaseProps> = (
    {
        time,
        username
    }
) => {
    return (
        <div className="d-flex">
            <p>{username}</p>
            <span>{time}</span>
        </div>
    )
}

export default ChatItemBase
