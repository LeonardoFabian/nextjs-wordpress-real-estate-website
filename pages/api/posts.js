import { gql } from "@apollo/client";
import client from "client";
import { mapPosts } from "utils/mapPosts";

// req client filters
// res status code, api response
const handlerPosts = async (req, res) => {
    try {
        const {data} = await client.query({
            query: gql`
                query PostsQuery {
                    posts(first: 10000) {
                        edges {
                            node {
                                databaseId
                                date
                                title(format: RENDERED)
                                slug
                                excerpt
                                featuredImage {
                                    node {
                                        sourceUrl(size: LARGE)
                                    }
                                }
                                categories {
                                    edges {
                                        node {
                                            name
                                            slug
                                            uri
                                            description
                                            databaseId
                                            parentId
                                        }
                                    }
                                }
                                author {
                                    node {
                                        name
                                    }
                                }
                                seo {
                                    title
                                    metaDesc
                                }
                                uri
                            }
                        }
                    }
                    recentPosts: posts(last: 3, where: {orderby: {field: DATE, order: DESC}}) {
                    edges {
                        node {
                            title(format: RENDERED)
                            slug
                            databaseId
                            date
                            excerpt
                            featuredImage {
                                node {
                                    sourceUrl(size: LARGE)
                                }
                            }
                            categories {
                                edges {
                                    node {
                                        name
                                    }
                                }
                            }
                            author {
                                node {
                                    name
                                }
                            } 
                            seo {
                                title
                                metaDesc
                            }
                            uri
                        }
                        }
                    }
                    generalSettings {
                        title
                        description
                        timeFormat
                        timezone
                        language
                        dateFormat
                        url
                    }
                }
            `,
        });

        const posts = mapPosts(data.posts.edges);
        const recentPosts = mapPosts(data.recentPosts.edges);

        return res.status(200).json({
            posts: posts,
            recentPosts: recentPosts
        });

    } catch (e) {
        console.log("HANDLER POSTS ERROR: ", e);
    }
};

export default handlerPosts;