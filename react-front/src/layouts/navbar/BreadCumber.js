import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

function BreadCumber(props) {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                {props.parent.map(p => {
                    return <Link key={p.name} to={p.name == "/" ? "/" : `/catalog/${p.name}`}>
                        {p.title}
                    </Link>
                })}
                {<p>{props.self?.title}</p>}
            </Breadcrumbs>
        </div>
    )
}

export default BreadCumber
