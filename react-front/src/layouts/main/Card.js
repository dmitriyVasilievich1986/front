import { useHistory } from 'react-router-dom';
import Statistics from '../blog/Statistics'
import React from 'react'

function Card(props) {
    const history = useHistory()
    return (
        <div className="ml4 mr4" style={{ marginTop: "3rem" }}>
            <div className="card" onClick={_ => history.push(`/blog/${props.card.name}`)}>
                <div dangerouslySetInnerHTML={{ __html: props.card.text }} />
            </div>
            <div>
                <Statistics
                    comments={props.card.comments_count}
                    likes={props.card.get_likes_count}
                    views={props.card.get_view_count}
                    isLiked={false}
                    sendLike={null}
                />
            </div>
        </div>
    )
}

export default Card
