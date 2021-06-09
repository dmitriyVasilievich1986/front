import { updateProperties } from '../../actions/mainActions'
import getHeaders from '../../common/getHeaders'
import { connect } from 'react-redux'
import React from 'react'
import axios from 'axios'

function AddComment(props) {
    const [text, updateText] = React.useState("")

    const cancelHandler = e => {
        updateText("")
        props.cancel && props.cancel()
    }

    const saveHandler = e => {
        const context = {
            text: text,
        }
        updateText("")
        props.cancel && props.cancel()
        if (props.owner)
            context['owner'] = props.owner
        else if (props.parent)
            context['parent'] = props.parent
        console.log(context)
        axios.post('/api/comments/', context, getHeaders())
            .then(data => {
                console.log(data.data)
                props.updateProperties({ comments: data.data })
            })
            .catch(err => console.log(err.message))
    }

    return (
        // <div className="mt2">
        <div>
            <textarea
                style={{ width: "100%", minHeight: "100px", resize: "vertical" }}
                onChange={e => updateText(e.target.value)}
                value={text}
            />
            {/* <textarea style={{ marginRight: "auto", marginLeft: "auto", width: "80%", resize: "vertical" }} /> */}
            <button onClick={saveHandler} className="btn-left btn-blue">сохранить</button>
            <button onClick={cancelHandler} className="btn-right btn-red">отмена</button>
        </div>
    )
}

export default connect(null, { updateProperties })(AddComment)
