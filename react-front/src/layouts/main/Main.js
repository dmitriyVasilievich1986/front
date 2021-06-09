import getHeaders from '../../common/getHeaders'
import BreadCumber from '../navbar/BreadCumber'
import { useParams } from "react-router-dom"
import RightLine from '../navbar/RightLine'
import LeftLine from '../navbar/LeftLine'
import Catalog from '../catalog/Catalog'
import CardList from './CardList'
import Blog from '../blog/Blog'
import Search from './Search'
import React from 'react'
import axios from 'axios'



function Main(props) {
    const [params, updateParams] = React.useState({})
    const [parent, updateParent] = React.useState([])
    const { name } = useParams()

    React.useEffect(_ => {
        if (name) {
            const apiPath = `/api/${props.blog ? "blog" : "catalog"}/${name}/by_name/`
            axios.get(apiPath, getHeaders())
                .then(data => {
                    // console.log(data.data)
                    updateParent(data.data.get_parent)
                    updateParams(data.data)
                })
                .catch(err => console.log(err))
        }
    }, [name])

    return (
        <div>
            <div className='main-container'>
                <div className='left-line'><LeftLine /></div>
                <div className='col3'>
                    {name && <BreadCumber parent={parent} />}
                    {
                        (props.catalog && <Catalog catalog={params} />) ||
                        (props.blog && <Blog blog={params} />) ||
                        (props.search && <Search />) ||
                        (props.cards) && <CardList />
                    }
                </div>
                <div className='right-line'>{props.blog && <RightLine />}</div>
            </div>
        </div>
    )
}

export default Main
