import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login/Login'
import Main from './pages/main/Main'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/main" component={Main} />

                <Route>
                    404
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
