import { Link } from 'react-router-dom'
import React from 'react'

export default function getChild(catalog) {
    const linkTo = 'blog' in catalog ? 'catalog' : 'blog'
    return (
        <li key={catalog.name}>
            <Link to={`/${linkTo}/${catalog.name}`}>{catalog.title}</Link>
            <ul>{catalog.blog?.map(b => getChild(b))}</ul>
            <ul>{catalog.catalog?.map(c => getChild(c))}</ul>
        </li>
    )
}