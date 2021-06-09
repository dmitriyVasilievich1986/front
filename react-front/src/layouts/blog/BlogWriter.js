import React from 'react'
import Error404 from '../../Error404'
import { connect } from 'react-redux'
import axios from 'axios'

function BlogWriter(props) {
    const [text, updateText] = React.useState("")
    const [first, updateFirst] = React.useState(true)
    const [blogName, updateBlogName] = React.useState("")
    const [blogs, updateBlogs] = React.useState([])
    const [blogData, updateBlogData] = React.useState({})
    const [blogID, updateblogID] = React.useState(null)


    React.useEffect(_ => {
        props.fullCatalog?.child && updateBlogName(props.fullCatalog.child[0].name)
        axios.get('/api/blog/')
            .then(data => {
                updateBlogs(data.data)
                data.data[0] && updateBlogName(data.data[0].name)
            })
            .catch(err => console.log(err))
    }, [first])

    const getBlogText = name => {
        // console.log(name)
        updateBlogName(name)
        axios.get(`/api/blog/${name}/get_by_name/`)
            .then(data => {
                updateText(data.data.text)
                updateblogID(data.data.id)
            })
            .catch(err => console.log(err))
    }

    const sendUpdateBlogData = _ => {
        const context = {
            text: text
        }
        const headers = {
            headers: {
                "Authorization": `Token ${props.token}`
            }
        }
        axios.patch(`/api/blog/${blogID}/`, context, headers)
            .then(data => console.log(data.data))
            .catch(err => console.log(err))
    }


    if (props.user && props.user.is_superuser)
        return (
            <div className='row'>
                <div className='col1' />
                <div className='col3'>
                    <div className="row">
                        <p className="mr1">blog name:</p>
                        <select
                            value={blogName}
                            onChange={e => getBlogText(e.target.value)}
                        >
                            {blogs.map(c => <option value={c.name} key={c.name}>{c.title}</option>)}
                        </select>
                    </div>
                    <button onClick={sendUpdateBlogData}>Save</button>
                    <textarea style={{ width: "100%" }} className="mt3 mb3" value={text} onChange={e => updateText(e.target.value)} />
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                </div>
                <div className='col1' />
            </div>
        )
    return <Error404 />
}

const mapStateToProps = state => ({
    fullCatalog: state.main.fullCatalog,
    token: state.main.token,
    user: state.main.user,
})

export default connect(mapStateToProps, null)(BlogWriter)