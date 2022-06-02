import React from 'react'
import { Link } from 'react-router-dom';
import { useGetPosts } from '../../useCases/useGetPosts'

type Props = {}

const PostList = (props: Props) => {
    const [ postList ] = useGetPosts();


    const list = postList.map((value) => <li key={value.id}>
        <Link to={`${value.id}`}>
        {value.title} - {value.id}
        </Link>
    </li>)
  return (
    <div>
        <Link to="/">
            Go to HOME
        </Link>
        <ol>
            {list}
        </ol>
    </div>
  )
}

export default PostList