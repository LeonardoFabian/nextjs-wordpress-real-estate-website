import { useContentType } from "context/ContentTypeContext";
import Layout from "../Layout"
import { PostDate } from "./PostDate";
import { Heading } from "components/Heading";
import Image from "next/image";
import { PostCategories } from "./PostCategories";

const PostLayout = ({ children, title, dateTime, featuredImage, categories }) => {

    const contentType = useContentType();

    console.log("POST LAYOUT CHILDREN: ", children);

    return (
        <Layout title={`post ${contentType} Layout`}>
            <article className="max-w-3xl mx-auto my-10">
                <header className="text-center">
                    <PostCategories categories={categories} />
                    <Heading level="2" content={title} textAlign="center" />
                    {/* <PostDate dateTime={dateTime} /> */}
                </header>
                <div className="h-96 my-10 overflow-hidden">
                    <Image 
                        src={featuredImage}
                        width="1200"
                        height="384"
                        alt="Featured Image"
                        className="h-80 lg:h-96 w-full lg:max-w-3xl mx-auto shadow-lg lg:rounded-lg object-cover"
                    />
                </div>
                    {children}
            </article>
        </Layout>
    );
};

export default PostLayout;