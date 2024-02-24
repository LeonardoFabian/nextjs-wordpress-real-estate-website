import { PostCard } from "components/PostCard";
import { useEffect, useState } from "react"

export const PostsList = () => {

    const [posts, setPosts] = useState([]); 

    useEffect(() => {

        const getAllPosts = async () => {
            const response = await fetch(`/api/posts`);
            const data = await response.json();
            console.log("POSTS FETCH DATA: ", data);

            setPosts(data.posts);
        }

        getAllPosts();

    }, []);

    return (
        <div className="component-posts-layout max-w-5xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}