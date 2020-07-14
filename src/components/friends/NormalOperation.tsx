import React, { FC, useState } from 'react'
import { connect } from 'react-redux'
import useRouter from 'use-react-router'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import { ButtonClickHandler } from '../../modules/handler/handler'
import { dispatch_setCurrentTalker, Dispatch_setCurrentTalker } from '../../store/chat/chat.dispatch'
import { TooltipIcon } from './UserCell'

interface INormalOperationProps {
    user: IUserBase
    dispatch_setCurrentTalker: Dispatch_setCurrentTalker
}

const NormalOperation: FC<INormalOperationProps> = ({ user, dispatch_setCurrentTalker }) => {
    const [ anchorEl, setAnchorEl ] = useState<HTMLElement | null>(null)
    const { history: { push } } = useRouter()

    const moreMenuOpen: ButtonClickHandler = e => { setAnchorEl(e.currentTarget) }

    const moreMenuClose = () => { setAnchorEl(null) }

    const redirectToChat = () => {
        dispatch_setCurrentTalker(user)
        push({ pathname: '/main/chat' })
    }

    return (
        <>
            <TooltipIcon
                tip="消息"
                Icon={ChatBubbleIcon}
                onClick={redirectToChat}
            />

            <TooltipIcon
                tip="更多"
                Icon={MoreVertIcon}
                onClick={moreMenuOpen}
            />

            <Menu
                keepMounted
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={Boolean(anchorEl)}
                onClose={moreMenuClose}
            >
                <MenuItem>添加好友</MenuItem>
            </Menu>
        </>
    )
}

const mapDispatchToProps = {
    dispatch_setCurrentTalker
}

export default connect(null, mapDispatchToProps)(NormalOperation)
