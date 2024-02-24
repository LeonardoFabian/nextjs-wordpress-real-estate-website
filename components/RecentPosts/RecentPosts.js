import { Heading } from "components/Heading";
import { PostCard } from "components/PostCard";
import { useEffect, useState } from "react"

export const RecentPosts = () => {

    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        const getRecentPosts = async () => {
            const response = await fetch(`/api/posts`);
            const data = await response.json();
            console.log("RECENT POSTS FETCH DATA: ", data);

            setRecentPosts(data.recentPosts);
        }
        getRecentPosts();
    }, []);

    return (
        <section className="recent-posts container py-20 bg-slate-50">
            <div className="max-w-full lg:max-w-7xl mx-auto">
                <div className="mx-auto">
                    <Heading level="2" content="Publicaciones Recientes" textAlign="center" className="mx-auto" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-20">
                    {recentPosts.map(post => (
                        <PostCard key={post.id} post={post}/>
                    ))}
                </div>
            </div>
        </section>
    )
}