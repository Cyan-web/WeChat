import React, { FC, useState } from 'react'

const Chat: FC = () => {
    const [ input, setInput ] = useState('')

    return (
        <div>
            聊天
            <input
                type="text"
                value={input}
                onChange={ele => { setInput(ele.target.value) }}
            />
        </div>
    )
}

export default Chat
