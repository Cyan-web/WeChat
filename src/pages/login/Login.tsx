import React, { FC, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { store } from '../../store'
import { SET_USER_INFO } from '../../store/user/user.types'
import { InputChangeHandler, FormSubmitHandler } from '../../modules/handler/handler'
import { fetch } from '../../utils/axios'
import { session } from '../../utils/storage'

const Login: FC<RouteComponentProps> = ({ history: { push } }) => {
    const [ form, setForm ] = useState<IApiLoginParams>({ account: '', password: '' })

    const { account, password } = form

    const _onInput: InputChangeHandler = ({ currentTarget: { name, value } }) => {
        setForm(oldVal => Object.assign(oldVal, { [name]: value }))
    }

    const _onSubmit: FormSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            const { userInfo, token } = await fetch<ILoginResponseData>({ url: '/login', params: form })
            store.dispatch({ type: SET_USER_INFO, payload: { userInfo } })
            session.save({ token })
            push('/main/friends')
        } catch (e) {
            console.log(e)
        }
    }

    // useEffect(() => {
    //     const getData = async () => {
    //         const res = await axios.post('/register', {
    //             account: 'cyan6',
    //             password: '963852',
    //             nickname: 'cyan',
    //             avatar: '111',
    //             gender: '男',
    //             email: 'cl968523@gmail.com',
    //             area: '中国',
    //             sign: 'NewBee',
    //             mobile: '13512347890'
    //         })
    //         console.log(res)
    //     }
    //
    //     getData()
    // }, [])

    return (
        <div className="login">
            <div className="login-form position-center pa-n6 elevation-3">
                <form onSubmit={_onSubmit}>
                    <div className="login-form-group">
                        <label className="mr-n2" htmlFor="account">账号:</label>
                        <input
                            type="text"
                            name="account"
                            defaultValue={account}
                            onInput={_onInput}
                        />
                    </div>

                    <div className="login-form-group">
                        <label className="mr-n2" htmlFor="password">密码:</label>
                        <input
                            type="password"
                            name="password"
                            defaultValue={password}
                            onInput={_onInput}
                        />
                    </div>

                    <button type="submit">
                        登录
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
