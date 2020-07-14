import React, { FC } from 'react'
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom'

import PrivateChannel from '../../components/privateChannel/PrivateChannel'
import Friends from './children/Friends'
import Chat from './children/Chat'

const Main: FC<RouteComponentProps> = ({ history: { replace } }) => {
    return (
        <div className="main">
            <div className="main-left">
                <PrivateChannel/>
            </div>

            <div className="main-content flex-1 overflow-hidden">
                <Switch>
                    <Route path="/main/friends" component={Friends} />
                    <Route path="/main/chat" component={Chat} />

                    <Redirect path="/main" to="/main/chat" exact />
                </Switch>
            </div>
        </div>
    )
}

export default Main
