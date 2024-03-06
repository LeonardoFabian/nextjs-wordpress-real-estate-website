import { gql } from "@apollo/client";

// export const GET_MENUS = gql`
//     query GetMenus {
//         acfOptionsMainMenu {
//             mainMenu {
//                 callToActionButton {
//                     label
//                     destination {
//                         ... on Page {
//                             uri
//                         }
//                     }
//                 }
//                 menuItems {
//                     items {
//                         label
//                         destination {
//                             ... on Page {
//                                 uri
//                             }
//                         }
//                     }
//                     menuItem {
//                         label
//                         destination {
//                             ... on Page {
//                                 uri
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `


export const GET_PAGES_BY_URI = gql`
    query PageQuery($uri: String!) {        
        posts {
            edges {
                node {
                    title
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
        recentPosts: posts(last: 3, where: {orderby: {field: DATE, order: DESC}}) {
            edges {
            node {
                title
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
        nodeByUri(uri: $uri) {
            ... on Page {
                id
                title
                blocks(postTemplate: false)
                featuredImage {
                    node {
                        sourceUrl(size: LARGE)
                        title(format: RENDERED)
                        mediaDetails {
                            width
                            height
                        }
                    }
                }
                seo {
                    title
                    metaDesc
                }
                contentType {
                    node {
                    name
                    }
                }
            }
            ... on Post {
                id
                title
                date
                blocks(postTemplate: false)
                featuredImage {
                    node {
                        sourceUrl(size: LARGE)
                        title(format: RENDERED)
                        mediaDetails {
                            width
                            height
                        }
                    }
                }
                author {
                    node {
                        databaseId
                        name
                        email
                        slug
                        uri
                        avatar {
                            url
                        }
                        userMetadata {
                            profilePicture {
                                sourceUrl
                            }
                            contactInformation {
                                userEmail
                                userPhone
                                userWhatsapp
                            }
                        }
                    }
                }
                seo {
                    title
                    metaDesc
                }
                contentType {
                    node {
                    name
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
            ... on Property {
                id
                title
                blocks(postTemplate: false)
                seo {
                    title
                    metaDesc
                }
                propertyFeatures {
                    code
                    listingType
                    bedrooms
                    bathrooms
                    hasParking
                    parkingQty
                    squareFeet
                    petFriendly
                    status
                    price
                    currency
                    floor
                    deliveryDate
                    yearBuilt
                    condition
                    propertyLocationMap
                    zipCode
                }
                featuredImage {
                    node {
                        sourceUrl(size: LARGE)
                        title(format: RENDERED)
                        mediaDetails {
                            width
                            height
                        }
                    }
                }
                contentType {
                    node {
                    name
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
                author {
                    node {
                        databaseId
                        firstName
                        lastName
                        slug
                        uri
                        userMetadata {
                            jobTitle
                            contactInformation {
                                userAddress
                                userEmail
                                userPhone
                                userWhatsapp
                                userWebsite
                                userLinkedin
                            }
                            profilePicture {
                                sourceUrl
                            }
                        }
                    }
                }
                features {
                    edges {
                    node {
                        databaseId
                        name
                        slug
                        uri
                    }
                    }
                }
                locations {
                    edges {
                    node {
                        databaseId
                        name
                        slug
                        uri
                    }
                    }
                }
                cities {
                    edges {
                    node {
                        databaseId
                        name
                        slug
                        uri
                    }
                    }
                }
                states {
                    edges {
                    node {
                        databaseId
                        name
                        slug
                        uri
                    }
                    }
                }
                countries {
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
            # ... on User {
            #     databaseId
            #     firstName
            #     lastName
            #     description
            #     slug 
            #     uri
            #     userMetadata {
            #         jobTitle
            #         profilePicture {
            #             sourceUrl
            #         }
            #         contactInformation {
            #             userAddress
            #             userEmail
            #             userPhone
            #             userWhatsapp
            #             userWebsite
            #             userLinkedin
            #         }
            #     }
            #     properties {
            #     edges {
            #         node {
            #         title(format: RENDERED)
            #         slug
            #         uri
            #         featuredImage {
            #             node {
            #             sourceUrl(size: LARGE)
            #             }
            #         }
            #         date
            #         propertyFeatures {
            #             code
            #             listingType
            #             price
            #             currency
            #             bedrooms
            #             bathrooms
            #             hasParking
            #             parkingQty
            #             petFriendly
            #             status
            #         }
            #         locations {
            #             edges {
            #                 node {
            #                     name
            #                 }
            #             }
            #         }
            #         cities {
            #             edges {
            #                 node {
            #                     name
            #                 }
            #             }
            #         }
            #             categories {
            #                 edges {
            #                     node {
            #                         databaseId
            #                         name
            #                         slug
            #                         uri
            #                     }
            #                 }
            #             }
            #         }
            #     }
            # }
            #}
            ... on Category {
            databaseId
            name
            posts {
                nodes {
                uri
                title
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
                title
                contentType {
                    node {
                    name
                    }
                }
                }
            }
            }
        }
        themeGeneralSettings {   
            generalSettings {
            companySettings {
                address
                description
                email
                name
                phone
            }
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
                destination {
                    ... on Page {
                    uri
                    }
                }
                label
                }
                menuItem {
                destination {
                    ... on Page {
                    uri
                    }
                }
                label
                }
            }
            }
        }
        acfOptionsFooterPrimaryMenu {
            footerPrimaryMenu {
            footerMenuItems {
                menuItem {
                destination {
                    ... on Page {
                    uri
                    }
                }
                label
                }
            }
            footerMenuTitle
            }
        }
        acfOptionsFooterQuickLinks {
            footerQuickLinks {
            footerQuickLinks {
                label
                url {
                url
                target
                }
            }
            quickLinksTitle
            }
        }
        acfOptionsLegalPagesMenu {
            legalPages {
            legalPagesItems {
                destination {
                ... on Page {
                    uri
                }
                }
                label
            }
            legalMenuTitle
            }
        }
        acfOptionsPageMenu {
            pageMenu {
            pageMenuItems {
                menuItem {
                destination {
                    ... on Page {
                    uri
                    }
                }
                label
                }
            }
            pageMenuTitle
            }
        }
        acfOptionsSocialMenu {
            socialMenu {              
            socialMenuItems {
                label
                socialNetwork
                url {
                url
                target
                }
            }
            socialMenuTitle
            }
        }
        acfOptionsContact {
            contactMetadata {
            contactFields {
                addresses {
                address {
                    label
                    street
                    number
                    neighborhood
                    city
                    state
                    country
                    zipCode
                    asDefaultAddress
                    publish
                }
                icon {
                    id
                    uri
                    sourceUrl(size: LARGE)
                    mimeType
                    mediaDetails {
                    sizes {
                        sourceUrl
                    }
                    }
                }
                }
                emails {
                email {
                    label
                    emailAddress
                    publish
                }
                icon {
                    id
                    uri
                    sourceUrl(size: LARGE)
                    mimeType
                    mediaDetails {
                    sizes {
                        sourceUrl
                    }
                    }
                }
                }
                location {
                streetName
                streetNumber
                streetAddress
                city
                state
                country
                latitude
                longitude
                postCode
                zoom
                }
                openingHours {
                hours {
                    schedules {
                    schedule {
                        dayOfWeek
                        timeOpen
                        timeClosed
                        publish
                    }
                    }
                }
                icon {
                    id
                    uri
                    sourceUrl(size: LARGE)
                    mimeType
                    mediaDetails {
                    sizes {
                        sourceUrl
                    }
                    }
                }
                }
                phones {
                phone {
                    label
                    phoneNumber
                    publish
                }
                icon {
                    id
                    uri
                    sourceUrl(size: LARGE)
                    mimeType
                    mediaDetails {
                    sizes {
                        sourceUrl
                    }
                    }
                }
                }
                socialNetworks {
                title
                socialNetwork {
                    url {
                    target
                    url
                    }
                    label
                    platform
                    publish
                }
                }
            }
            }
        }
        acfOptionsFaqs {
            frequentlyAskedQuestions {
            faqs {
                faq {
                question
                answer
                publish
                }
            }
            }
        }
        # acfOptionsForms {
        #   Forms {
        #     acfWpForms {
        #       acfWpForm {
        #         acfWpFormLabel
        #         acfWpFormSelect
        #         position
        #       }
        #     }
        #   }
        # }
    }
`