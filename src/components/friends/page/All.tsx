import React, { FC, useState, useEffect } from 'react'

import NormalOperation from '../NormalOperation'
import UserCell from '../UserCell'
import { api_allFriends } from '../../../apis/friends'
import { OperationType_All } from '../operationTypes'

const All: FC = () => {
    const [ allFriends, setAllFriends ] = useState<IUserBase[]>([])

    const getAllFriends = async () => {
        const data = await api_allFriends()
        setAllFriends(data)
    }

    useEffect(() => {
        getAllFriends()
    }, [])

    return (
        <div className="all-container flex-1">
            <div className="friend-tip">好友总数 — {allFriends.length}</div>

            {
                allFriends.map(e => {
                    return (
                        <UserCell
                            type={OperationType_All}
                            key={e.id}
                            {...e}
                        >
                            <NormalOperation user={e} />
                        </UserCell>
                    )
                })
            }
        </div>
    )
}

export default All
