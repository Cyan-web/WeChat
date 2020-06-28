import { FormEvent } from 'react'

// input 输入事件
export type InputChangeHandler = (event: FormEvent<HTMLInputElement>) => void

// form 提交时间
export type FormSubmitHandler = (event: FormEvent<HTMLFormElement>) => void
