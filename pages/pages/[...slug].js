import { gql } from "@apollo/client"
import client from "client"
import { getPageStaticProps } from "utils/getPageStaticProps";
import { Page } from "components/Page";
// import { useRouter } from "next/router";

export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
    const {data} = await client.query({
        query: gql`
            query AllPagesQuery {
                pages {
                    nodes {
                        uri
                        contentType {
                            node {
                                name
                            }
                        }
                    }
                }
                properties {
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

    return {
        paths: [...data.pages.nodes, ...data.properties.nodes]
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