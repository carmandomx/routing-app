import { useState, useEffect } from 'react';

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const useGetPosts = () => {
    const [postList, setPostList] = useState<IPost[]>([])

    useEffect(() => {
        (async () => {
            const req = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await req.json() as IPost[];

            setPostList(data.slice(0, 10))



        })()
    }, [])


    return [postList]
}

