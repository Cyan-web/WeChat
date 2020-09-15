import React, { FC, ReactNode } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IPrivateChannelBlock extends RouteComponentProps {
    avatar?: string | ReactNode
    title: string
    link: string
    callback?: () => void
    close?: () => void
}

const PrivateChannelBlock: FC<IPrivateChannelBlock> = (
    {
        history: { replace },
        avatar,
        title,
        link,
        callback
    }
) => {
    const routerToFriends = () => {
        replace(link)
        callback && callback()
    }

    return (
        <div className="privateChannel-block mb-n1" onClick={routerToFriends}>
            {avatar}
            <span className="ml-n2">{title}</span>
        </div>
    )
}

export default withRouter(PrivateChannelBlock)
