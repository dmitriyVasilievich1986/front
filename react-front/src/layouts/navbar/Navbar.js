import { updateProperties } from '../../actions/mainActions'
import { User } from '../../common/supportClasses'
import { useHistory } from 'react-router-dom';
import options from '../../common/getHeaders'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'
import axios from 'axios'

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import FaceIcon from '@material-ui/icons/Face';

function Navbar(props) {
    // console.log(props.fullCatalog)
    const [first, updateFirst] = React.useState(true)
    const [text, updateText] = React.useState("")
    const history = useHistory()

    React.useEffect(_ => {
        if (props.user == null && props.token != "") {
            axios.get('/auth/accounts/', options())
                .then(data => props.updateProperties({ user: new User(data.data) }))
                .catch(_ => { })
        }
    }, [first])

    const sendLogoutData = _ => {
        axios.delete('/auth/accounts/1', options())
            .then(_ => {
                props.updateProperties({ user: null })
            })
    }

    const searchHandler = e => {
        if (e.key == "Enter") {
            const context = {
                tags: text
            }
            updateText("")
            axios.post(`/api/blog/search/`, context)
                .then(data => {
                    props.updateProperties({ search: data.data })
                    history.push("/search/")
                })
                .catch(err => console.log(err.message))
        }
    }

    return (
        <nav className='navbar'>
            <div className="row justify-between">
                <div className="col1">
                    <div className="row align-center">
                        <img src="/static/image/favicon.png" style={{ height: "30px", width: "30px" }} />
                        <h3 className='ml1'>Astron</h3>
                    </div>
                    <div className="mb2 row align-center">
                        <SearchIcon />
                        <input
                            onChange={e => updateText(e.target.value)}
                            onKeyDown={searchHandler}
                            className="search"
                            value={text}
                            type="text"
                        />
                    </div>
                </div>
                <div className='col1 align-center row justify-between'>
                    <Link to='/'><h3 className="link">Главная</h3></Link>
                    {
                        props.fullCatalog.child?.map(c =>
                            <Link key={c.name} to={`/catalog/${c.name}/`}>
                                <h3 className="link">{c.title}</h3>
                            </Link>)
                    }
                </div>
                <div className='col1 align-center row justify-end'>
                    {props.user == null ?
                        <Link to='/login'><h3 className="link">Войти</h3></Link> :
                        <div className='row justify-end align-center'>
                            <Link to='/account'><h3 className="link">{props.user.get_name()}</h3></Link>
                            <ExitToAppIcon className='ml1 link' onClick={sendLogoutData} />
                            {/* <img src="/static/logout.png" className='ml1 link-gray icon-active' onClick={sendLogoutData} /> */}
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    fullCatalog: state.main.fullCatalog,
    token: state.main.token,
    user: state.main.user,
})

export default connect(mapStateToProps, { updateProperties })(Navbar)
