import { updateProperties } from '../../actions/mainActions'
import { User } from '../../common/supportClasses'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'
import axios from 'axios'

import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FaceIcon from '@material-ui/icons/Face';

function Login(props) {
    const [password, updatePassword] = React.useState('')
    const [show, updateShow] = React.useState(false)
    const [login, updateLogin] = React.useState('')
    const [error, updateError] = React.useState("")
    const [URL, updateURL] = React.useState(null)

    React.useEffect(_ => {
        axios.get("/auth/get_google_url/")
            .then(data => updateURL(data.data.url_string))
            .catch(err => console.log(err.message))
    }, [])

    const sendLoginData = _ => {
        const context = {
            password: password,
            username: login,
        }
        axios.post('/auth/accounts/login/', context)
            .then(data => {
                // console.log(data.data)
                const user = new User(data.data)
                const token = data.data.token
                localStorage.setItem('token', token)
                props.updateProperties({
                    token: token,
                    user: user,
                })
            })
            .catch(err => updateError("неверные данные"))
    }

    const updateLoginHandler = e => {
        updateLogin(e.target.value)
        updateError("")
    }

    const enterClickHandler = e => {
        if (e.key == "Enter") {
            sendLoginData()
        }
    }

    if (props.user != null)
        return <Redirect to='/' />
    return (
        <div className='login'>
            <img src="/static/image/favicon.png" style={{ height: "70px", width: "70px" }} />
            <h3 className='ml1'>{process.env.REACT_APP_PROJECT_NAME}</h3>
            <div style={{ display: "flex", marginTop: "5rem" }}>
                <FaceIcon className="login-icon" />
                <input
                    onChange={updateLoginHandler}
                    onKeyDown={enterClickHandler}
                    className="login-input"
                    placeholder="Логин"
                    value={login}
                    type="text"
                />
            </div>
            <div style={{ display: "flex", marginTop: "2rem" }}>
                {
                    show ?
                        <VisibilityIcon onClick={_ => updateShow(!show)} className="login-icon" /> :
                        <VisibilityOffIcon onClick={_ => updateShow(!show)} className="login-icon" />
                }
                <input
                    onChange={e => updatePassword(e.target.value)}
                    type={show ? "text" : "password"}
                    onKeyDown={enterClickHandler}
                    className="login-input"
                    placeholder="Пароль"
                    value={password}
                />
            </div>
            <p className="error">{error}</p>
            <button className='enter-btn mt4' onClick={sendLoginData}><h3>Войти</h3></button>
            <div>
                {URL && <a href={URL}><img src="/static/image/google-logo.png" style={{ height: "60px", width: "60px" }}></img></a>}
            </div>
            <p>Нет аккаунта?</p>
            <Link style={{ outline: "none" }} to='/create_account'><h3 className="link-gray">Создать</h3></Link>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.main.user,
})

export default connect(mapStateToProps, { updateProperties })(Login)
