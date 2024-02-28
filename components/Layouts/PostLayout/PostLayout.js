import { useContentType } from "context/ContentTypeContext";
import Layout from "../Layout"
import { PostDate } from "./PostDate";
import { Heading } from "components/Heading";
import Image from "next/image";
import { PostCategories } from "./PostCategories";
import { DateRelativeTime } from "components/DateRelativeTime";
import { useState } from "react";
import { mapCategories } from "utils/mapCategories";

const PostLayout = ({ children, title, dateTime, featuredImage, categories, post }) => {

    const postCategories = mapCategories(post.categories.edges);
    const hasCategories = Boolean(postCategories.length);

    const contentType = useContentType();

    console.log("POST LAYOUT CHILDREN: ", children);
    console.log("POST LAYOUT POST: ", post);
    console.log("POST LAYOUT CATEGORIES: ", postCategories);

    const formatDate = (date) => new Date(date).toLocaleDateString();

    return (
        <Layout title={`post ${contentType} Layout`}>
            <article className="max-w-3xl mx-auto my-10 overflow-hidden">
                <header className="text-center">
                    {hasCategories && <PostCategories categories={postCategories} />}
                    <Heading level="2" content={post.title} textAlign="center" />
                    {/* <PostDate dateTime={formatDate(dateTime)} /> */}
                    <DateRelativeTime dateTime={post.date} />
                </header>
                <div className="h-96 my-10 overflow-hidden">
                    <Image 
                        src={post.featuredImage?.node.sourceUrl}
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