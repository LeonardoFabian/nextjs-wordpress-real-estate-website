import { gql } from "@apollo/client";

export const GET_USER_BY_URI = gql`
    query GetUserByUri($uri: ID!) {
        user(id: $uri, idType: URI) {
            databaseId
            firstName
            lastName
            description
            userMetadata {
                jobTitle
                profilePicture {
                    sourceUrl
                }
                contactInformation {
                    userAddress
                    userEmail
                    userPhone
                    userWhatsapp
                    userWebsite
                    userLinkedin
                }
            }
            properties {
                edges {
                    node {
                    title(format: RENDERED)
                    slug
                    uri
                    featuredImage {
                        node {
                        sourceUrl(size: LARGE)
                        }
                    }
                    date
                    propertyFeatures {
                        code
                        listingType
                        price
                        currency
                        bedrooms
                        bathrooms
                        hasParking
                        parkingQty
                        petFriendly
                        status
                    }
                    locations {
                        edges {
                            node {
                                name
                            }
                        }
                    }
                    cities {
                        edges {
                            node {
                                name
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
                    }
                }
            }
        }
    }
`