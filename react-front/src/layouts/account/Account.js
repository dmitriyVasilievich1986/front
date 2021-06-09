import { updateProperties } from '../../actions/mainActions'
import { User } from '../../common/supportClasses'
import options from '../../common/getHeaders'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'
import axios from 'axios'

import FaceIcon from '@material-ui/icons/Face';

function setInput(I, placeholder, value, update, enterKey) {
    return (
        <div style={{ display: "flex", marginTop: "2rem" }}>
            <I />
            <input
                className="login-input"
                onChange={e => {
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


function Account(props) {
    const [name, UpdateName] = React.useState(props.user?.first_name || '')
    const [surname, UpdateSurname] = React.useState(props.user?.last_name || '')

    const sendUpdateData = _ => {
        const context = {
            last_name: surname,
            first_name: name,
        }
        axios.put('/auth/accounts/1/', context, options())
            .then(data => {
                updateProperties({
                    user: new User({
                        ...props.user,
                        last_name: data.data.last_name,
                        first_name: data.data.first_name,
                    })
                })
            })
            .catch(err => console.log(err.response))
    }

    const enterKeyHandler = e => {
        if (e.key == "Enter") {
            sendUpdateData()
        }
    }

    if (props.user == null) {
        return <Redirect to='/login' />
    }
    return (
        <div className='login'>
            <div style={{ marginBottom: "5rem" }}>
                <img src="/static/image/favicon.png" style={{ height: "70px", width: "70px" }} />
                <h3 className='ml1'>Astron</h3>
            </div>
            {setInput(FaceIcon, "Имя", name, UpdateName, enterKeyHandler)}
            {setInput(FaceIcon, "Фамилия", surname, UpdateSurname, enterKeyHandler)}
            <button onClick={sendUpdateData} className='enter-btn mb4'><h3>Сохранить</h3></button>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.main.user,
    token: state.main.token,
})

export default connect(mapStateToProps, { updateProperties })(Account)
