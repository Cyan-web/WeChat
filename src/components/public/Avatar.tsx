import React, { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import defaultAvatar from './avatar.png'

interface IAvatarProps {
    src: string
    size?: 'md' | 'lg' | 'sm'
    className?: string
}

const Avatar: FC<IAvatarProps> = ({ src, size, className }) => {
    const [ avatar, setAvatar ] = useState<string>(defaultAvatar)

    const classes = classNames(`avatar avatar-${size}`, className)

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => {
            setAvatar(img.src)
        }
    }, [ src ])

    return (
        <div className={classes}>
            <img src={avatar} alt="avatar"/>
        </div>
    )
}

Avatar.defaultProps = {
    size: 'md'
}

export default Avatar
