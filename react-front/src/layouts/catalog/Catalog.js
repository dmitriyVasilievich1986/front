import getChild from '../navbar/getChild'
import React from 'react'

function Catalog(props) {
    return (
        <div>
            <h1>catalog: {props.catalog.name}</h1>
            <ul>{props.catalog.get_child && getChild(props.catalog.get_child)}</ul>
        </div>
    )
}

export default Catalog
