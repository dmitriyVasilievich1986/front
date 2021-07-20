import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios'


function Search(props) {
    const [isLoading, updateIsLoading] = React.useState(true)
    const [result, updateResult] = React.useState([])

    React.useEffect(_ => {
        const query = new URLSearchParams(props.location.search)
        const context = {
            tags: query.get('search') || "",
        }

        axios.post(`/api/blog/search/`, context)
            .then(data => updateResult(data.data))
            .catch(err => console.log(err.message))
            .finally(_ => updateIsLoading(false))
    }, [props.location.search])

    if (isLoading) {
        return (
            <div style={{ marginTop: "5rem", marginBottom: "5rem" }} className="row justify-center">
                <CircularProgress />
            </div>
        )
    }
    return (
        <div className='main-container'>
            <div className='left-line' />
            <div className='col3'>
                {
                    result.length ?
                        <p>Результат поиска:</p> :
                        <p>К сожалению по данному запросу ничего не найдено.</p>
                }
                {result?.map(s => <div key={s.name}><Link key={s.name} to={`/blog/${s.name}/`}>{s.title}</Link></div>)}
            </div>
            <div className='right-line' />
        </div>
    )
}

const mapStateToProps = state => ({
    search: state.main.search,
})

export default connect(mapStateToProps)(Search)
