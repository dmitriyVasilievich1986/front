import getChild from '../navbar/getChild'
import React from 'react'

function Catalog(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.catalog.title}</h1>
            <ul>{props.catalog.catalog && props.catalog.catalog.blog?.map(b => getChild(b))}</ul>
            <ul>{props.catalog.catalog && props.catalog.catalog.catalog?.map(b => getChild(b))}</ul>
        </div>
    )
}

export default Catalog
