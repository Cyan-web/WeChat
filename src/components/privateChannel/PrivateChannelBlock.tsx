import React, { ComponentClass, FunctionComponent, FC, createElement } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IPrivateChannelBlock extends RouteComponentProps {
    avatar: string | FunctionComponent | ComponentClass
    title: string
    link: string
    close?: () => void
}

const PrivateChannelBlock: FC<IPrivateChannelBlock> = (
    {
        history: { push },
        avatar,
        title,
        link,
        close
    }
) => {
    const routerToFriends = () => {
        push(link)
    }

    return (
        <div className="privateChannel-block" onClick={routerToFriends}>
            {createElement(avatar)}
            <span className="ml-n2">{title}</span>
        </div>
    )
}

export default withRouter(PrivateChannelBlock)
