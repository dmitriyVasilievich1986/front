import { updateProperties } from '../../actions/mainActions'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'

function GoogleAuth(props) {
    const query = new URLSearchParams(props.location.search)
    const token = query.get('token')

    localStorage.setItem('token', token)
    props.updateProperties({
        token: token,
    })

    return <Redirect to='/' />
}

export default connect(null, { updateProperties })(GoogleAuth)
