import React from 'react'
import { connect } from 'react-redux'

function RightLine(props) {
    return (
        <div>
            <h3>Содержание:</h3>
            <div className="ml4">
                {props.indexes.map((c, i) => <div key={i}><a href={`#${i}`}>{c}</a></div>)}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    indexes: state.main.indexes,
})

export default connect(mapStateToProps)(RightLine)
