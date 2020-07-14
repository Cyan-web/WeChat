import React, { FC, useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import Button from '../../public/Button'
import UserCell, { TooltipIcon } from '../UserCell'
import { api_addFriend, api_searchFriend } from '../../../apis/friends'
import { OperationType_Add } from '../operationTypes'

const AddOperation: FC<{ id: number }> = ({ id: addId }) => {
    const addFriend = async () => {
        await api_addFriend({ addId })
        console.log('添加好友成功, 等待对方同意')
    }
    return (
        <>
            <TooltipIcon
                tip="添加好友"
                Icon={AddCircleIcon}
                onClick={addFriend}
            />
        </>
    )
}

const Add: FC = () => {
    const [ search, setSearch ] = useState<string>('')
    const [ searchResult, setSearchResult ] = useState<ISearchUserInfoResponseData[]>([])

    const onSearch = async () => {
        const res = await api_searchFriend({ search })
        setSearchResult(res)
    }

    return (
        <div className="add-container overflow-hidden flex-1 d-flex flex-column">
            <div className="friendsAdd divider pa-n6">
                <h5 className="fz-16">添加好友</h5>

                <p className="fz-14 my-n4">您可以用昵称或者账号来搜索想要添加的好友。</p>

                <div className="friendsAdd-search d-flex align-center justify-space-between px-n3">
                    <input
                        type="text"
                        maxLength={16}
                        value={search}
                        onChange={ele => { setSearch(ele.target.value) }}
                    />

                    <Button onClick={onSearch}>搜索</Button>
                </div>
            </div>

            {/*<img src="/images/friends/friends_add.svg" />*/}

            <div className="friendsAdd-searchResult overflow-hidden flex-1">
                <div className="friendsAdd-searchResult-summary mx-n6 color_4--text">搜索结果：{searchResult.length}人</div>

                <div className="friendsAdd-searchList slender-scroll">
                    {
                        searchResult.map(e => (
                            <UserCell
                                type={OperationType_Add}
                                key={e.id}
                                {...e}
                            >
                                <AddOperation id={e.id} />
                            </UserCell>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Add
