import React, { FC } from 'react'
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom'

import ChatList from '../../components/main/friendListPanel/ChatList'
import Friends from './children/Friends'
import Chat from './children/Chat'

const Main: FC<RouteComponentProps> = ({ history: { replace } }) => {
    return (
        <div className="main">
            <div className="main-left">
                <ChatList/>
            </div>

            <div className="main-content flex-1 overflow-hidden">
                <Switch>
                    <Route path="/main/friends" component={Friends} />
                    <Route path="/main/chat" component={Chat} />

                    <Redirect path="/main" to="/main/friends" exact />
                </Switch>
            </div>
        </div>
    )
}

export default Main
