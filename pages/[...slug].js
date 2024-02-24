import { gql } from "@apollo/client"
import client from "client"
import { getPageStaticProps } from "utils/getPageStaticProps";
import { Page } from "components/Page";
// import { useRouter } from "next/router";

export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {

    // const response = await fetch('/api/search');
    // const apiData = await response.json();

    // const {data} = await client.query({
    //     query: gql`
    //         query AllPagesQuery {
    //             pages {
    //                 nodes {
    //                     uri
    //                     contentType {
    //                         node {
    //                             name
    //                         }
    //                     }
    //                     contentTypeName
    //                 }
    //             }
    //             properties {
    //                 nodes {
    //                     uri
    //                     contentType {
    //                         node {
    //                             name
    //                         }
    //                     }
    //                     contentTypeName
    //                 }
    //             }
    //             posts {
    //                 nodes {
    //                     uri
    //                     contentType {
    //                         node {
    //                             name
    //                         }
    //                     }
    //                     contentTypeName
    //                 }
    //             }
    //         }
    //     `,
    // });

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
            }
        `,
    });

    // return {
    //     paths: [...data.pages.nodes, ...data.properties.nodes, ...data.posts.nodes]
    //     .filter((page) => page.uri !== "/")
    //     .map((page) => ({
    //         params: {
    //             contentType: page.contentType.node.name,                
    //             slug: page.uri.substring(1, page.uri.length - 1).split("/")
    //         },
    //     })),
    //     fallback: "blocking",
    // };

    return {
        paths: [...data.pages.edges, ...data.properties.edges, ...data.posts.edges]
            .filter((page) => page.node.uri !== "/")
            .map((page) => ({
            params: { 
                slug: page.node.uri.substring(1, page.node.uri.length - 1).split("/")
            },
        })),
        fallback: "blocking",
    };
};