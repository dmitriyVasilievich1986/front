import { updateProperties } from '../../actions/mainActions'
import getHeaders from '../../common/getHeaders'
import { connect } from 'react-redux'
import Statistics from './Statistics'
import AddComment from './AddComment'
import Comment from './Comment'
import React from 'react'
import axios from 'axios'



function Blog(props) {
    // console.log(props.blog)
    // props.updateProperties({ comments: [] })
    const [commentsCount, updateCommentsCount] = React.useState(0)
    const [likesCount, updateLikesCount] = React.useState(0)
    const [viewCount, updateViewCount] = React.useState(0)
    const [isLiked, updateIsLiked] = React.useState(false)
    const [result, updateResult] = React.useState("")
    const [show, updateShow] = React.useState(false)

    const updateButtonVisibility = _ => {
        if (!show && window.pageYOffset > 200)
            updateShow(true)
        else if (show && window.pageYOffset < 200)
            updateShow(false)
    }

    window.addEventListener("scroll", updateButtonVisibility)

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
        updateCommentsCount(props.blog.comments_count)
        updateLikesCount(props.blog.get_likes_count)
        updateViewCount(props.blog.get_view_count)
        updateIsLiked(props.blog.is_liked)
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
            <div dangerouslySetInnerHTML={{ __html: result }} />
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
            {show && <button onClick={_ => window.scrollTo({ top: 0 })} className="up">наверх</button>}
            <div style={{ height: "5rem" }}></div>
        </div>
    )
}

const mapStateToProps = state => ({
    comments: state.main.comments,
})

export default connect(mapStateToProps, { updateProperties })(Blog)
