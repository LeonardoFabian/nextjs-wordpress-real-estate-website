import PostLayout from "components/Layouts/PostLayout/PostLayout";
import { BlockRenderer } from "components/BlockRenderer";
import { Heading } from "components/Heading";
import { ContentTypeProvider } from "context/ContentTypeContext";
import Head from "next/head";
import { MainMenu } from "components/MainMenu";

export const Post = (props) => {

    console.log("POST PROPS: ", props.post);

    return (
        <ContentTypeProvider>
            <Head>
                <title>{props.post.seo?.title || "Single Post"}</title>
                <meta name="description" content={props.post.seo?.metaDesc || "Post meta description"} />
            </Head>
            <MainMenu 
                items={props.mainMenuItems}
                callToActionLabel={props.callToActionLabel} 
                callToActionDestination={props.callToActionDestination}
            />
            <PostLayout title={props.post.title} post={props.post}>
                <Heading textAlign="left" level="2" content={props.post.title} />
                <BlockRenderer blocks={props.post.blocks} />
            </PostLayout>
        </ContentTypeProvider>
    );
};