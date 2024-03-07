import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonLink } from "components/ButtonLink"
import { Heading } from "components/Heading"
import { PostDate } from "components/Layouts/PostLayout/PostDate"
import Image from "next/image"
import Link from "next/link"
import { mapCategories } from "utils/mapCategories"

export const PostCard = ({post}) => {

    const categories = mapCategories(post?.categories?.nodes);

    return (
        <article className={`component-post-card post-${post.databaseId} card w-full mx-auto shadow-lg flex flex-col`}>
            <header className="p-6">
                <div className="flex items-center text-xs space-x-4">
                    {post.categories.map(category => (
                        <Link key={category?.id} href={category?.uri}>
                            <span className="uppercase text-yellow-600">{category?.name}</span>
                        </Link>
                    ))}  
                </div>
                <div className="mt-5">
                    <PostDate dateTime={post?.date} className="text-sm" />              
                    <Link href={post?.uri} className="hover:underline">
                        <strong><Heading level="5" content={post?.title} /></strong>
                    </Link>
                </div>
            </header>
            <div className="mt-auto h-56 overflow-hidden relative">
                {
                    post?.featuredImage
                    ? 
                    <Image 
                        alt="Post Card Image"
                        src={post?.featuredImage}
                        fill
                        className="object-cover"
                    />
                    : <Image 
                        alt="Post Card Image"
                        src="/default-featured-image.jpg"
                        fill
                        className="object-cover"
                    />
                }
            </div>
            {/* <Image /> */}
            <footer className="p-6 flex items-center justify-between">
                {/* <ButtonLink label="Ver más" destination={post.uri} /> */}
                <Link 
                    href={`${post?.uri}`} 
                    className="uppercase text-xs inline-block items-center justify-center space-x-4 transition-all ease-in-out duration-100 hover:space-x-8"
                >
                    <span>Ver más</span>
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </Link>
            </footer>
        </article>
    )
}