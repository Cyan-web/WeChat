import React, { FC, useState } from 'react'

import Button from '../../public/Button'
import UserCell from './UserCell'
import { fetch } from '../../../utils/axios'

const Add: FC = () => {
    const [ search, setSearch ] = useState<string>('')
    const [ searchResult, setSearchResult ] = useState<ISearchUserInfo[]>([])

    const onSearch = async () => {
        const res = await fetch<ISearchUserInfo[]>({ url: '/friends/search', params: { search } })
        setSearchResult(res)
    }

    return (
        <div className="friendsAdd-container overflow-hidden flex-1 d-flex flex-column">
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
                        searchResult.map(e => <UserCell key={e.id} {...e} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Add
