import getChild from '../navbar/getChild'
import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'


function Catalog(props) {
    if (props.catalog.title) {
        return (
            <div>
                <h1>{props.catalog.title}</h1>
                <ul>{props.catalog.catalog && props.catalog.catalog.blog?.map(b => getChild(b))}</ul>
                <ul>{props.catalog.catalog && props.catalog.catalog.catalog?.map(b => getChild(b))}</ul>
            </div>
        )
    } else {
        return (
            <div style={{ marginTop: "5rem", marginBottom: "5rem" }} className="row justify-center">
                <CircularProgress />
            </div>)
    }
}

export default Catalog
