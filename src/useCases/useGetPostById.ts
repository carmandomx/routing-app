import { useState, useEffect } from 'react'
import { IPost } from './useGetPosts'

export const useGetPostById = (postId: number) => {
    const [post, setPost] = useState<IPost>();

    useEffect(() => {
        (async() => {
            const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            const data = await req.json() as IPost;
            setPost(data);
        })()
    }, [postId])


    return post;
}