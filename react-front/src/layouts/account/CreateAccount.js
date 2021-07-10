import { updateProperties } from '../../actions/mainActions'
import { User } from '../../common/supportClasses'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'
import axios from 'axios'

import FaceIcon from '@material-ui/icons/Face';
import LockIcon from '@material-ui/icons/Lock';

function setInput(I, placeholder, value, update, error, enterKey) {
    return (
        <div style={{ display: "flex", marginTop: "2rem" }}>
            <I />
            <input
                className="login-input"
                onChange={e => {
                    error('')
                    update(e.target.value)
                }}
                placeholder={placeholder}
                onKeyDown={enterKey}
                value={value}
                type='text'
            />
        </div>
    )
}

function CreateAccount(props) {
    const [password2, UpdatePassword2] = React.useState('')
    const [password, UpdatePassword] = React.useState('')
    const [login, UpdateLogin] = React.useState('')
    const [password2Error, UpdatePassword2Error] = React.useState('')
    const [passwordError, UpdatePasswordError] = React.useState('')
    const [loginError, UpdateLoginError] = React.useState('')


    const sendCreateData = _ => {
        if (password2 != password) {
            UpdatePassword2Error('пароли не совпадают')
            return
        }

        const context = {
            password: password,
            username: login,
        }
        axios.post('/auth/accounts/', context)
            .then(data => {
                const token = data.data.token
                const user = new User(data.data)
                props.updateProperties({
                    token: token,
                    user: user,
                })
                localStorage.setItem('token', token)
            })
            .catch(err => {
                UpdateLoginError(err.response.data?.username && err.response.data?.username[0])
                UpdatePasswordError(err.response.data?.password && err.response.data?.password[0])
            })
    }

    const enterKeyHandler = e => {
        if (e.key == "Enter") {
            sendCreateData()
        }
    }

    if (props.user != null)
        return <Redirect to='/' />
    return (
        <div className='login'>
            <div style={{ marginBottom: "5rem" }}>
                <img src="/static/image/favicon.png" style={{ height: "70px", width: "70px" }} />
                <h3 className='ml1'>{process.env.REACT_APP_PROJECT_NAME}</h3>
            </div>
            {setInput(FaceIcon, 'Логин', login, UpdateLogin, UpdateLoginError, enterKeyHandler)}
            <h5 className='error'>{loginError}</h5>
            {setInput(LockIcon, 'Пароль', password, UpdatePassword, UpdatePasswordError, enterKeyHandler)}
            <h5 className='error'>{passwordError}</h5>
            {setInput(LockIcon, 'Повторите пароль', password2, UpdatePassword2, UpdatePassword2Error, enterKeyHandler)}
            <h5 className='error'>{password2Error}</h5>
            <button onClick={sendCreateData} className='enter-btn mb3'><h3>Создать</h3></button>
            <p>Уже есть аккаунт?</p>
            <Link to='/login' ><h3 className="link-gray">Войти</h3></Link>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.main.user,
})

export default connect(mapStateToProps, { updateProperties })(CreateAccount)
