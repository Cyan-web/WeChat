import React, { FC, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Tooltip from '@material-ui/core/Tooltip'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import Avatar from '../../public/Avatar'

import { ButtonClickHandler } from '../../../modules/handler/handler'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon'

interface TooltipIconProps {
    tip: string
    Icon: OverridableComponent<SvgIconTypeMap>
    onClick?: ButtonClickHandler
}

export const TooltipIcon: FC<TooltipIconProps> = ({ tip, Icon, onClick }) => {
    return (
        <Tooltip title={tip} placement="top" arrow>
            <IconButton onClick={onClick}>
                <Icon fontSize="small" />
            </IconButton>
        </Tooltip>
    )
}

export const NormalOperation: FC<{ id: number }> = ({ id }) => {
    const [ anchorEl, setAnchorEl ] = useState<HTMLElement | null>(null)

    const moreMenuOpen: ButtonClickHandler = e => { setAnchorEl(e.currentTarget) }

    const moreMenuClose = () => { setAnchorEl(null) }

    return (
        <>
            <TooltipIcon
                tip="消息"
                Icon={ChatBubbleIcon}
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

interface IUserCellProps extends ISearchUserInfoResponseData {
    type: OperationTypes
}

const UserCell: FC<IUserCellProps> = ({
    type,
    id,
    avatar,
    account,
    nickname,
    online,
    waitReply,
    children
}) => {
    const status = online ? '在线' : '离线'

    return (
        <div className="userCell d-flex mx-n6 px-n2">
            <div className="userCell-container overflow-hidden flex-1 d-flex align-center">
                <div>
                    <Avatar src={avatar} className="mr-n2" />
                </div>

                <div>
                    <div className="userCell-info color_4--text">
                        <h5 className="fz-16 white--text r">
                            {nickname}
                            <span className="fz-14 ml-n1">{account}</span>
                        </h5>
                        <p className="fz-14">{status}</p>
                    </div>
                </div>
            </div>

            <div className="userCell-operation d-flex align-center ">
                {children}
                {/*{whichOperation()}*/}
            </div>
        </div>
    )
}

export default UserCell
