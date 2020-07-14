import React, { FC, useCallback, useEffect } from 'react'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'

import NormalOperation from '../NormalOperation'
import UserCell, { TooltipIcon } from '../UserCell'
import { api_agreeAddFriend, api_refuseAddFriend, Api_undetermined } from '../../../apis/friends'
import {
    OperationType_All,
    OperationType_Online,
    OperationType_Undetermined,
    OperationType_Blocking
} from '../operationTypes'

interface IFriendsPanelProps {
    type: OperationType_All | OperationType_Online | OperationType_Undetermined | OperationType_Blocking
    all: ISearchUserInfoResponseData[]
    awaitReply: ISearchUserInfoResponseData[]
    dispatch_awaitReply: IDispatchHandler
    dispatch_allFriends: IDispatchHandler
}

const UndeterminedOperation: FC<{ id: number }> = ({ id }) => {
    const handlerClick = async (api: Api_undetermined) => {
        const res = await api({ id })
        console.log(res)
    }

    return (
        <>
            <TooltipIcon
                tip="同意"
                Icon={CheckIcon}
                onClick={() => { handlerClick(api_agreeAddFriend) }}
            />
            <TooltipIcon
                tip="拒绝"
                Icon={CloseIcon}
                onClick={() => { handlerClick(api_refuseAddFriend) }}
            />
        </>
    )
}

const FriendsCommon: FC<IFriendsPanelProps> = (
    {
        type,
        all,
        awaitReply,
        dispatch_allFriends,
        dispatch_awaitReply
    }
) => {
    const dispatchCallback = useCallback(() => ({ getAllFriends: dispatch_allFriends, getAwaitReply: dispatch_awaitReply }),
        [ dispatch_allFriends, dispatch_awaitReply ])

    const { getAllFriends, getAwaitReply } = dispatchCallback()

    useEffect(() => {
        if ((type === OperationType_All || type === OperationType_Online) && !all.length) getAllFriends()
    }, [ type, all, getAllFriends ])

    useEffect(() => {
        if (type === OperationType_Undetermined && !awaitReply.length) getAwaitReply()
    }, [ type, awaitReply, getAwaitReply ])

    let renderData: ISearchUserInfoResponseData[] = [],
        tipText = ''

    switch (type) {
        case OperationType_All:
            renderData = all
            tipText = `好友总数 - ${all.length}`
            break
        case OperationType_Online:
            renderData = all.filter(e => e.online)
            tipText = `在线 - ${renderData.length}`
            break
        case OperationType_Undetermined:
            renderData = awaitReply
            tipText = `待处理 - ${awaitReply.length}`
            break
        case OperationType_Blocking:
            renderData = all.filter(e => e.blocking)
            tipText = `已屏蔽 - ${awaitReply.length}`
            break
    }

    return (
        <div className="friendsCommon flex-1">
            <div className="friendsCommon-tip">{tipText}</div>

            {
                renderData.map(e => (
                    <UserCell
                        type={type}
                        key={e.id}
                        {...e}
                    >
                        {
                            type === OperationType_Undetermined
                                ? <UndeterminedOperation id={e.id} />
                                : <NormalOperation user={e} />
                        }
                    </UserCell>
                ))
            }
        </div>
    )
}

export default FriendsCommon
