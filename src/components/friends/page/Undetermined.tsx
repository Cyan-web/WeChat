import React, { FC, useEffect, useState } from 'react'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'

import UserCell, { TooltipIcon } from '../UserCell'
import { OperationType_Undetermined } from '../operationTypes'
import { api_awaitReply, api_agreeAddFriend, api_refuseAddFriend, Api_undetermined } from '../../../apis/friends'

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

const Undetermined: FC = () => {
    const [ awaitReply, setAwaitReply ] = useState<ISearchUserInfoResponseData[]>([])

    const getAwaitReply = async () => {
        const res = await api_awaitReply()
        setAwaitReply(res)
    }

    useEffect(() => {
        socket.emit('test', '喂，不是吧 啊sir')
        getAwaitReply()
    }, [])

    return (
        <div className="undetermined-container flex-1">
            <div className="friend-tip">待处理 — {awaitReply.length}</div>

            {
                awaitReply.map(e => (
                    <UserCell
                        type={OperationType_Undetermined}
                        key={e.id}
                        {...e}
                    >
                        <UndeterminedOperation id={e.id} />
                    </UserCell>
                ))
            }
        </div>
    )
}

export default Undetermined
