import React, { FC } from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import GroupIcon from '@material-ui/icons/Group'

// import SearchHeader from './SearchHeader'
import PrivateChannelBlock from './PrivateChannelBlock'
import { Dispatch_setCurrentTalker, dispatch_setCurrentTalker } from '../../store/chat/chat.dispatch'

interface IPrivateChannelProps {
    chatList: ISearchUserInfoResponseData[]
    dispatch_setCurrentTalker: Dispatch_setCurrentTalker
}

const PrivateChannel: FC<IPrivateChannelProps> = ({ chatList, dispatch_setCurrentTalker }) => {
    return (
        <div className="privateChannel pa-n2 d-flex flex-column">
            <PrivateChannelBlock
                link="/main/friends"
                title="好友"
                avatar={<GroupIcon/>}
            />

            {
                chatList.map(e => {
                    const { id, nickname, avatar } = e
                    const avatarDom = (<Avatar src={avatar} style={{ width: 32, height: 32 }} />)
                    const callback = () => { dispatch_setCurrentTalker(e) }

                    return (
                        <PrivateChannelBlock
                            key={id}
                            link="/main/chat"
                            callback={callback}
                            title={nickname}
                            avatar={avatarDom}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (store: IStore) => {
    const {
        chat: { chatHistory },
        friends: { all }
    } = store

    const chatIds = Array.from(new Set(Object.keys(chatHistory).map(e => e.split('_')).flat().map(Number)))
    const chatList = all.filter(e => chatIds.includes(e.id))
    return { chatList }
}

export default connect(mapStateToProps, { dispatch_setCurrentTalker })(PrivateChannel)
