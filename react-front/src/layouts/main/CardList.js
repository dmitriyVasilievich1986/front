import React from 'react'
import axios from 'axios'
import Card from './Card'

import CircularProgress from '@material-ui/core/CircularProgress'


function CardList() {

    const [isLoading, updateIsLoading] = React.useState(false)
    const [cards, updateCards] = React.useState([])
    const [pages, updatePages] = React.useState(0)
    const [page, updatePage] = React.useState(0)

    const sendGetPage = _ => {
        updateIsLoading(true)
        const context = {
            page: page,
        }
        axios.post(`/api/blog/page/`, context)
            .then(data => {
                updatePage(page + 1)
                updateCards([...cards, ...data.data.blogs])
                updatePages(data.data.pages)
            })
            .catch(err => console.log(err.message))
            .finally(_ => updateIsLoading(false))
    }

    React.useEffect(_ => {
        sendGetPage()
    }, [])

    const moreButtonShow = _ => {
        if (page <= pages) {
            if (isLoading) {
                return (
                    <div style={{ marginTop: "5rem" }} className="row justify-center">
                        <CircularProgress />
                    </div>
                )
            } else {
                return (
                    <div className="row justify-center mt4">
                        <button onClick={sendGetPage} className="btn btn-red">Еще</button>
                    </div>
                )
            }
        }
    }

    return (
        <div>
            {cards.map(c => <Card key={c.title} card={c} />)}
            {moreButtonShow()}
        </div>
    )
}

export default CardList
