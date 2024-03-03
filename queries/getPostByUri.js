import { gql } from "@apollo/client";

export const GET_POST_BY_URI = gql`
    query GetPostByUri($id: ID!) {
        post(id: $id, idType: URI) {
            title
            slug
            content
            date
            uri
            author {
                node {
                    firstName
                    lastName
                    email
                }
            }
            blocks(postTemplate: false)
            featuredImage {
                node {
                    sourceUrl(size: LARGE)
                    title
                    mediaDetails {
                        width
                        height
                    }
                }
            }
            categories {
                edges {
                    node {
                        databaseId
                        name
                        slug
                        uri
                    }
                }
            }
            seo {
                title
                metaDesc
            }
        }
        acfOptionsMainMenu {
            mainMenu {
                callToActionButton {
                    label
                    destination {
                        ... on Page {
                            uri
                        }
                    }
                }
                menuItems {
                    items {
                        label
                        destination {
                            ... on Page {
                                uri
                            }
                        }
                    }
                    menuItem {
                        label
                        destination {
                            ... on Page {
                                uri
                            }
                        }
                    }
                }
            }
        }
    }
`

