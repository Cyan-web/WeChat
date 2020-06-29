import React, { FC, ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: FC<IButtonProps> = ({
    children,
    onClick,
    className
}) => {
    const classes = classNames(className, 'button')

    return (
        <button
            className={classes}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
