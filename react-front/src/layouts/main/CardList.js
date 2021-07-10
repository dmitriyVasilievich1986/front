import React from 'react'
import axios from 'axios'
import Card from './Card'

function CardList() {
    const [cards, updateCards] = React.useState([])
    const [pages, updatePages] = React.useState(0)
    const [page, updatePage] = React.useState(0)


    const sendGetPage = _ => {
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
    }

    React.useEffect(_ => {
        sendGetPage()
    }, [])

    return (
        <div>
            {cards.map(c => <Card key={c.title} card={c} />)}
            {page <= pages ?
                <div className="row justify-center mt4"><button onClick={sendGetPage} className="btn btn-red">Еще</button></div> :
                ""
            }
        </div>
    )
}

export default CardList
