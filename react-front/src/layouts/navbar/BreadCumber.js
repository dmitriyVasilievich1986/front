import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

function BreadCumber(props) {
    const thisName = props.parent && props.parent[0]?.title || ""
    const parent = props.parent?.slice(1) || []
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                {parent?.reverse()
                    .map(c => <Link key={c.name} to={c.name == "/" ? "/" : `/catalog/${c.name}`}>
                        {c.title}
                    </Link>
                    )
                }
                <p>{thisName}</p>
            </Breadcrumbs>
        </div>
    )
}

export default BreadCumber
