import React from 'react'
import Error404 from '../../Error404'
import { connect } from 'react-redux'
import axios from 'axios'
import getHeaders from '../../common/getHeaders'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function BlogWriter(props) {
    const [text, updateText] = React.useState("new blog")
    const [first, updateFirst] = React.useState(true)
    const [blogName, updateBlogName] = React.useState("new")
    const [blogs, updateBlogs] = React.useState([])
    const [catalogs, updateCatalogs] = React.useState([])
    const [catalog, updateCatalog] = React.useState("")
    const [blogData, updateBlogData] = React.useState({})
    const [blogID, updateblogID] = React.useState(null)
    const [newBlogName, updateNewBlogName] = React.useState("new")
    const [blogTitle, updateBlogTitle] = React.useState("new")



    React.useEffect(_ => {
        props.fullCatalog?.child && updateBlogName(props.fullCatalog.child[0].name)
        axios.get('/api/catalog/')
            .then(data => {
                // console.log(data.data)
                const cs = data.data
                updateCatalogs(data.data)
                axios.get('/api/blog/')
                    .then(data => {
                        updateBlogs([...data.data, { name: "new", title: "new", text: "new blog", id: null }])
                        // console.log(data.data)
                        // data.data[0] && updateBlogName(data.data[0].name)
                        const c = cs.filter(a => a.id == data.data[0].catalog)[0]
                        updateCatalog(c.name)
                        // updateText(data.data[0].text)
                        // updateBlogName(data.data[0].name)
                        // updateNewBlogName(data.data[0].name)
                        // updateBlogTitle(data.data[0].title)
                        // updateblogID(data.data[0].id)
                    })
                    .catch(err => console.log(err.message))
            })
            .catch(err => console.log(err.message))
    }, [first])

    const getBlogText = name => {
        if (name == "new") {
            updateText("new blog")
            updateBlogName("new")
            updateNewBlogName("new")
            updateBlogTitle("new")
            updateblogID(null)
            return
        }
        // console.log(name)
        updateBlogName(name)
        updateNewBlogName(name)
        axios.get(`/api/blog/${name}/by_name/`)
            .then(data => {
                updateText(data.data.text)
                updateblogID(data.data.id)
                updateBlogTitle(data.data.title)
            })
            .catch(err => console.log(err))
    }

    const saveBlogHandler = _ => {
        if (newBlogName == blogName && blogID !== null) {
            sendUpdateBlogData()
        } else {
            console.log("new blog")
            sendNewBlog()
        }
    }


    const sendNewBlog = _ => {
        const c = catalogs.filter(a => a.name == catalog)[0].id
        const context = {
            name: newBlogName,
            title: blogTitle,
            text: text,
            catalog: c,
        }
        axios.post(`/api/blog/`, context, getHeaders())
            .then(data => {
                updateBlogs([...blogs, data.data])
                updateText(data.data.text)
                updateBlogTitle(data.data.title)
                updateBlogName(data.data.name)
                updateNewBlogName(data.data.name)
            })
            .catch(err => console.log(err.message))
    }

    const sendUpdateBlogData = _ => {
        const c = catalogs.filter(a => a.name == catalog)[0].id
        // console.log(text)
        const context = {
            title: blogTitle,
            text: text,
            catalog: c,
        }
        axios.patch(`/api/blog/${blogID}/`, context, getHeaders())
            .then(data => {
                updateText(data.data.text)
                updateBlogTitle(data.data.title)
            })
            .catch(err => console.log(err.message))
    }


    if (props.user && props.user.is_superuser)
        return (
            <div>
                <div className="row">
                    <p className="mr1">blog name:</p>
                    <select
                        style={{ width: "250px" }}
                        value={blogName}
                        onChange={e => getBlogText(e.target.value)}
                    >
                        {blogs.map(c => <option value={c.name} key={c.name}>{c.title}</option>)}
                    </select>
                </div>
                <div className="row">
                    <p className="mr1">blog name:</p>
                    <select
                        style={{ width: "250px" }}
                        value={catalog}
                        onChange={e => updateCatalog(e.target.value)}
                    >
                        {catalogs.map(c => <option value={c.name} key={c.name}>{c.name}</option>)}
                    </select>
                </div>
                <input type="text" value={newBlogName} onChange={e => updateNewBlogName(e.target.value)} />
                <input type="text" value={blogTitle} onChange={e => updateBlogTitle(e.target.value)} />
                <button className="btn btn-blue" onClick={saveBlogHandler}>{newBlogName == blogName && blogID != null ? "Save" : "New"}</button>
                <CKEditor
                    editor={ClassicEditor}
                    data={text}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        updateText(data)
                        // console.log({ event, editor, data });
                    }}
                />
            </div >
            // <div className='row'>
            //     <div className='col1' />
            //     <div className='col3'>
            //         <div className="row">
            //             <p className="mr1">blog name:</p>
            //             <select
            //                 value={blogName}
            //                 onChange={e => getBlogText(e.target.value)}
            //             >
            //                 {blogs.map(c => <option value={c.name} key={c.name}>{c.title}</option>)}
            //             </select>
            //         </div>
            //         <button onClick={sendUpdateBlogData}>Save</button>
            //         <textarea style={{ width: "100%" }} className="mt3 mb3" value={text} onChange={e => updateText(e.target.value)} />
            //         <div dangerouslySetInnerHTML={{ __html: text }} />
            //     </div>
            //     <div className='col1' />
            // </div>
        )
    return <Error404 />
}

const mapStateToProps = state => ({
    fullCatalog: state.main.fullCatalog,
    token: state.main.token,
    user: state.main.user,
})

export default connect(mapStateToProps, null)(BlogWriter)