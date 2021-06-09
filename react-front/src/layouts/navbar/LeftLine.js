import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import getChild from './getChild'
import React from 'react'

function LeftLine(props) {

    return (
        <div>
            <Link to={props.fullCatalog.name}>{props.fullCatalog.title}</Link>
            <ul>{props.fullCatalog.child?.map(c => getChild(c))}</ul>
        </div>
    )
}

const mapStateToProps = state => ({
    fullCatalog: state.main.fullCatalog,
})

export default connect(mapStateToProps)(LeftLine)
