import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'

function Search(props) {
    return (
        <div>
            {
                props.search.length ?
                    <p>Результат поиска:</p> :
                    <p>К сожалению по данному запросу ничего не найдено.</p>
            }
            {props.search?.map(s => <Link key={s.name} to={`/blog/${s.name}/`}>{s.title}</Link>)}
        </div>
    )
}

const mapStateToProps = state => ({
    search: state.main.search,
})

export default connect(mapStateToProps)(Search)
