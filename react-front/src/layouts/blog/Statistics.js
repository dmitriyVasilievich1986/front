import React from 'react'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';

function Statistics(props) {
    const style = { cursor: props.sendLike && "pointer" || "default" }
    return (
        <div className="row align-center ml4 mt2">
            {
                props.isLiked &&
                <FavoriteIcon onClick={props.sendLike} className="like" style={style} /> ||
                <FavoriteBorderIcon onClick={props.sendLike} className="like" style={style} />
            }
            {props.likes}
            <VisibilityIcon className="ml2" />{props.views}
            <MessageIcon className="ml2" />{props.comments}
        </div>
    )
}

export default Statistics
