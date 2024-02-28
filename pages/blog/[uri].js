import { gql } from "@apollo/client"
import client from "client"
import { getPageStaticProps } from "utils/getPageStaticProps";
import { getPostStaticProps } from "utils/getPostStaticProps";
import { Post } from "components/Post";
import { getPost } from "utils/getPosts";

export default Post;

export const getStaticProps = getPost;

export const getStaticPaths = async () => {

    // const {data} = await client.query({ 
    //     query: gql`
    //         query AllPostsQuery {
    //             posts {
    //                 edges {
    //                     node {
    //                         uri
    //                     }
    //                 }
    //             }
    //         }
    //     `,
    // });

    // return {
    //     paths: 
    //         [...data.posts.edges]
    //         .filter((page) => page.node.uri !== "/")
    //         .map((page) => ({
    //         params: { 
    //             uri: page.node.uri.substring(1, page.node.uri.length - 1).split("/")
    //         },
    //     })),
    //     fallback: "blocking",
    // };


    const paths = [];
    return {
        paths,
        fallback: "blocking"
    }
};