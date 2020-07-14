import { FormEvent, MouseEvent, KeyboardEvent } from 'react'

// input 输入事件
export type InputChangeHandler = (event: FormEvent<HTMLInputElement>) => void

// form 提交时间
export type FormSubmitHandler = (event: FormEvent<HTMLFormElement>) => void

// button 点击事件
export type ButtonClickHandler = (event: MouseEvent<HTMLElement>) => void

// input keydown 事件
export type InputKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => void
