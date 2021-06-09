import React from 'react'
import axios from 'axios'
import Card from './Card'

function CardList() {
    const [first, updateFirst] = React.useState(true)
    const [cards, updateCards] = React.useState([])
    const [pages, updatePages] = React.useState(0)
    const [page, updatePage] = React.useState(0)

    React.useEffect(_ => {
        const context = {
            page: page,
        }
        axios.post(`/api/blog/page/`, context)
            .then(data => {
                updateCards(data.data.blogs)
                updatePages(data.data.pages)
            })
            .catch(err => console.log(err.message))
    }, [])
    return (
        <div>
            {cards.map(c => <Card key={c.title} card={c} />)}
        </div>
    )
}

export default CardList
