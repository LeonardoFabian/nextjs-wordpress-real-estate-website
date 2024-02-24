import { useEffect } from "react"

export const PostSearch = () => {

    useEffect(() => {
        const posts = async () => {
            const response = await fetch(`/api/posts`);
            const data = await response.json();
            console.log("POST SEARCH FETCH DATA: ", data);
        }

        posts();
    }, [])

    return (
        <div>Post Search</div>
    )
}