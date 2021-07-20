import { updateProperties } from '../../actions/mainActions'
import getHeaders from '../../common/getHeaders'
import { connect } from 'react-redux'
import Statistics from './Statistics'
import AddComment from './AddComment'
import Comment from './Comment'
import React from 'react'
import axios from 'axios'

import CircularProgress from '@material-ui/core/CircularProgress'


function Blog(props) {
    const [commentsCount, updateCommentsCount] = React.useState(0)
    const [likesCount, updateLikesCount] = React.useState(0)
    const [viewCount, updateViewCount] = React.useState(0)
    const [isLiked, updateIsLiked] = React.useState(false)
    const [result, updateResult] = React.useState("")

    React.useEffect(_ => {
        let r = ""
        const text = props.blog.text || ""
        text.split(/<h3/).map((c, i) => {
            if (i > 0)
                r += `<h3 id='${i - 1}'` + c
        })
        const indexes = text.match(/<h3.*?h3>/g)?.map(c => c.replace(/<h3.*?>|<\/h3>/g, '')) || []
        updateResult(r)
        props.updateProperties({ indexes: indexes })

        props.updateProperties({ comments: props.blog.comments })
        updateCommentsCount(props.blog.comments_count || 0)
        updateLikesCount(props.blog.likes_count || 0)
        updateViewCount(props.blog.view_count || 0)
        updateIsLiked(props.blog.is_liked || false)
    }, [props.blog])

    const sendLike = _ => {
        const headers = getHeaders()
        axios.post(`/api/blog/${props.blog.name}/likes/`, {}, headers)
            .then(data => {
                updateLikesCount(data.data.likes)
                updateIsLiked(data.data.is_liked)
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div>
            {
                result === "" ?
                    <div style={{ marginTop: "5rem", marginBottom: "5rem" }} className="row justify-center"><CircularProgress /></div> :
                    <div dangerouslySetInnerHTML={{ __html: result }} />
            }
            <div style={{ height: "3rem" }} />
            <div className="statistics align-center row">
                <Statistics
                    comments={commentsCount}
                    sendLike={sendLike}
                    likes={likesCount}
                    isLiked={isLiked}
                    views={viewCount}
                />
            </div>
            <div style={{ height: "3rem" }} />
            {props.comments?.map((c, i) => <Comment c={c} key={i} />)}
            <div style={{ height: "3rem" }} />
            <p>Оставьте свой комментарий:</p>
            <AddComment owner={props.blog.id} />
            <div style={{ height: "5rem" }}></div>
        </div>
    )
}

const mapStateToProps = state => ({
    comments: state.main.comments,
})

export default connect(mapStateToProps, { updateProperties })(Blog)
