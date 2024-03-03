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
                pages {
                    edges {
                        node {
                            uri
                        }
                    }
                }
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
                categories {
                    edges {
                        node {
                            uri
                        }
                    }
                }
                users {
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
            [
                ...data.pages.edges, 
                ...data.properties.edges, 
                ...data.posts.edges, 
                ...data.categories.edges, 
                ...data.users.edges
            ]
            .filter((page) => page.node.uri !== "/")
            .map((page) => ({
            params: { 
                uri: page.node.uri.substring(1, page.node.uri.length - 1).split("/")
            },
        })),
        fallback: "blocking",
    };

};