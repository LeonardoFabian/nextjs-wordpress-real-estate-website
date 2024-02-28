import { gql } from "@apollo/client";

export const GET_MENUS = gql`
    query GetMenus {
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
            ... on User {
            databaseId
            email
            name
            avatar {
                url
            }
            description
            firstName
            lastName
            roles {
                nodes {
                name
                displayName
                }
            }
            properties {
                nodes {
                title
                uri
                databaseId
                propertyFeatures {
                    price
                    currency
                    bedrooms
                    bathrooms
                    hasParking
                    parkingQty
                    petFriendly
                    listingType
                    status
                    code
                }
                date
                categories {
                    nodes {
                    name
                    }
                }
                locations {
                    nodes {
                    name
                    }
                }
                cities {
                    nodes {
                    name
                    }
                }
                }
            }
            }
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
export const GET_POSTS_BY_LANGUAGE = gql`
    query GetPostByLanguage($language: LanguageCodeFilterEnum!) {
        posts(where: {language: $language}) {
            edges {
                node {
                    databaseId
                    title
                    slug
                    uri
                    excerpt
                    date
                    language {
                        code
                        locale
                    }
                }
            }
        }
        generalSettings {
            title
            description
        }
    }
`
