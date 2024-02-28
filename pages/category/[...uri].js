import { gql } from "@apollo/client"
import client from "client"
import { getPageStaticProps } from "utils/getPageStaticProps";
import { Page } from "components/Page";

export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {

    const {data} = await client.query({
        query: gql`
            query AllPagesQuery {
                properties {
                    edges {
                        node {
                            uri
                        }
                    }
                }
                posts {
                    edges {
                        node {
                            uri
                        }
                    }
                }
            }
        `,
    });

    return {
        paths: 
            [...data.properties.edges, ...data.posts.edges]
            .filter((page) => page.node.uri !== "/")
            .map((page) => ({
            params: { 
                uri: page.node.uri.substring(1, page.node.uri.length - 1).split("/")
            },
        })),
        fallback: "blocking",
    };


    // const paths = [];
    // return {
    //     paths,
    //     fallback: "blocking"
    // }
};