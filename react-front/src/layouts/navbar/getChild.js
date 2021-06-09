import { Link } from 'react-router-dom'
import React from 'react'

export default function getChild(catalog) {
    return (
        <li key={catalog.title}>
            <Link to={`/catalog/${catalog.name}`}>{catalog.title}:</Link>
            {
                catalog.blog &&
                <ul>{catalog.blog?.map(b => <li key={b.name}><Link to={`/blog/${b.name}`}>{b.title}</Link></li>)}</ul> ||
                <ul>{catalog.child?.map(c => getChild(c))}</ul>
            }
        </li >
    )
}