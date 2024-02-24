import PostLayout from "components/Layouts/PostLayout/PostLayout";
import { BlockRenderer } from "components/BlockRenderer";
import { Heading } from "components/Heading";

export const Post = (props) => {

    console.log("POST PROPS: ", props);

    return (
        <PostLayout title={props.title}>
            <Heading textAlign="left" level="2" content={props.title} />
            <BlockRenderer blocks={props.blocks} />
        </PostLayout>
    );
};