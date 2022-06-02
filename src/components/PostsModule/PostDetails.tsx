import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetPostById } from '../../useCases/useGetPostById';
type Props = {}

const PostDetails = (props: Props) => {
    const { postId } = useParams();
    const post = useGetPostById(Number(postId))
  return (
    <div>
        PostDetail
        {post?.body} <br />
        {post?.id} <br />
        {post?.title} <br /> 
        {post?.userId}

    </div>
  )
}

export default PostDetails