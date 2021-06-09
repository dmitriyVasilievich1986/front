import React from 'react'
import AddComment from './AddComment'

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

function Comment(props) {
    const [showAnswer, updateShowAnswer] = React.useState(false)
    // console.log(props.c)

    const addAnswerClickHandler = e => {
        e.preventDefault()
        updateShowAnswer(!showAnswer)
    }

    return (
        <div>
            <div className="row align-center">
                <div className="mr2">
                    <Chip
                        avatar={<Avatar>{props.c.user[0].toUpperCase()}</Avatar>}
                        label={props.c.user}
                        color="primary"
                    />
                </div>
                <div className="col1">
                    <p>{props.c.text}</p>
                    <a onClick={addAnswerClickHandler}>ответить</a>
                </div>
            </div>
            {showAnswer && <AddComment cancel={_ => updateShowAnswer(!showAnswer)} parent={props.c.id} className="mt2" />}
            <ul>
                {props.c.child?.map((c, i) => <li key={i}><Comment c={c} /></li>)}
            </ul>
        </div>
    )
}

export default Comment
