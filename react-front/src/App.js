import ACTION_TYPES from './actions/actionTypes'
import { Provider } from 'react-redux'
import Error404 from './Error404'
import ReactDOM from 'react-dom'
import store from './store'
import React from 'react'
import axios from 'axios'

import loadable from '@loadable/component'


import {
    GoogleAuth,
    Account,
    Navbar,
    Search,
    Footer,
    Login,
} from './layouts'

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";


const CreateAccount = loadable(() => import("./layouts/account/CreateAccount"))
const BlogWriter = loadable(() => import("./layouts/blog/BlogWriter"))
const Main = loadable(() => import("./layouts/main/Main"))


function App() {
    const [show, updateShow] = React.useState(false)

    const updateButtonVisibility = _ => {
        if (!show && window.pageYOffset > 200)
            updateShow(true)
        else if (show && window.pageYOffset < 200)
            updateShow(false)
    }

    window.addEventListener("scroll", updateButtonVisibility)

    React.useEffect(_ => {
        axios.get('/api/catalog/1/')
            .then(data => {
                if (data.data.catalog) {
                    store.dispatch({
                        type: ACTION_TYPES.UPDATE_PROPERTIES,
                        payload: { fullCatalog: data.data.catalog },
                    })
                }
            })
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
                            <Route exact path='/' render={() => <Main cards />} />
                            <Route exact path='/oauth' component={GoogleAuth} />
                            <Route exact path='/write' component={BlogWriter} />
                            <Route exact path='/account' component={Account} />
                            <Route exact path='/search' component={Search} />
                            <Route exact path='/login' component={Login} />
                            <Route path='/' component={Error404} />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
            <Footer />
            {show && <button onClick={_ => window.scrollTo({ top: 0 })} className="up">наверх</button>}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))