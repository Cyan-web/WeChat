import React, { FC } from 'react'
import dayjs from 'dayjs'

export interface IChatItemBaseProps {
    create_time: IChatHistory['create_time']
    nickname: IUserBase['nickname']
}

const ChatItemBase: FC<IChatItemBaseProps> = (
    {
        create_time
    }
) => {
    const time = dayjs('2020-07-15T16:49:03.000Z').format('YYYY-MM-DD hh:mm:ss')

    return (
        <div className="d-flex color_4--text">
            <span className="fz-12 mb-n1">{time}</span>
        </div>
    )
}

export default ChatItemBase
