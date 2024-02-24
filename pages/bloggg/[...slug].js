import { gql } from "@apollo/client"
import client from "client"
import { getPageStaticProps } from "utils/getPageStaticProps";
import { Page } from "components/Page";

export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
    const {data} = await client.query({
        query: gql`
            query AllPostsQuery {
                posts {
                    nodes {
                        uri
                        contentType {
                            node {
                                name
                            }
                        }
                    }
                }
            }
        `,
    });

    // paths
    return {
        paths: [...data.posts.nodes]
        .filter((page) => page.uri !== "/")
        .map((page) => ({
            params: {
                contentType: page.contentType?.node.name,
                slug: page.uri.substring(1, page.uri.length - 1).split("/"),
            },
        })),
        fallback: "blocking",
    };
};