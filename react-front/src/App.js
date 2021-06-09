import ACTION_TYPES from './actions/actionTypes'
import { Provider } from 'react-redux'
import Error404 from './Error404'
import ReactDOM from 'react-dom'
import store from './store'
import React from 'react'
import axios from 'axios'

import {
    CreateAccount,
    BlogWriter,
    Account,
    Navbar,
    Footer,
    Login,
    Main,
} from './layouts'

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    axios.get('/api/catalog/1/')
        .then(data => {
            if (data.data.get_child) {
                store.dispatch({
                    type: ACTION_TYPES.UPDATE_PROPERTIES,
                    payload: { fullCatalog: data.data.get_child },
                })
            }
        })
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1 }}>
                <Provider store={store}>
                    <BrowserRouter>
                        <Navbar />
                        <Switch>
                            <Route exact path='/catalog/:name' render={() => <Main catalog />} />
                            <Route exact path='/create_account' component={CreateAccount} />
                            <Route exact path='/blog/:name' render={() => <Main blog />} />
                            <Route exact path='/search' render={() => <Main search />} />
                            <Route exact path='/' render={() => <Main cards />} />
                            <Route exact path='/write' component={BlogWriter} />
                            <Route exact path='/account' component={Account} />
                            <Route exact path='/login' component={Login} />
                            <Route path='/' component={Error404} />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))