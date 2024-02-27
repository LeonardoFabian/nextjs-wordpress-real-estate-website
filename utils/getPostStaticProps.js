import { gql } from "@apollo/client"
import client from "client"
import { mapPosts } from "./mapPosts";
import { mapMainMenuItems } from "./mapMainMenuItems";
import { mapCategories } from "./mapCategories";
import { mapCompanySettings } from "./mapCompanySettings";
import { mapFooterMenuItems } from "./mapFooterMenuItems";
import { mapFooterQuickLinks } from "./mapFooterQuickLinks";
import { mapLegalPages } from "./mapLegalPages";
import { mapPageMenuItems } from "./mapPageMenuItems";
import { mapSocialNetworks } from "./mapSocialNetworks";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapEmails } from "./mapEmails";
import { mapPhones } from "./mapPhones";
import { mapAddresses } from "./mapAddresses";
import { mapOpeningHours } from "./mapOpeningHours";

export const getPostStaticProps = async (context) => {

    // let slug = ``;

    // if(context?.params?.slug?.length > 0) {
    //     slug = context.params.slug;
    // }

    // if(
    //     slug && 
    //     slug.length > 1 && 
    //     slug[0] === 'blog'
    // ) {
    //     slug.shift(); // remove the first element of single post to retrieve the post blocks
    // } 

    const uri = context.params.slug ? `/${context.params.slug}` : "/";

    console.log("VARIABLE URI: ", uri);

    const {data} = await client.query({
        query: gql`
            query PostQuery($uri: String!) {
                posts {
                    edges {
                        node {
                            databaseId
                            title
                            slug
                            uri
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
                        }
                    }
                }
                recentPosts: posts(last: 3, where: {orderby: {field: DATE, order: DESC}}) {
                    edges {
                        node {
                            databaseId
                            title
                            slug
                            uri
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
                        }
                    }
                }
                nodeByUri(uri: $uri) {
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
            }
        `,
        variables: {
            uri,
        },
    });

    const serializedPosts = mapPosts(data.posts.edges);
    const serializedRecentPosts = mapPosts(data.recentPosts.edges);
    const serializedCategories = mapCategories(data.nodeByUri?.categories?.edges);

    const companySettings = mapCompanySettings(data.themeGeneralSettings.generalSettings.companySettings || null);
    const serializedEmails = mapEmails(data.acfOptionsContact.contactMetadata.contactFields.emails.email);
    const serializedPhones = mapPhones(data.acfOptionsContact.contactMetadata.contactFields.phones.phone);
    const serializedAddresses = mapAddresses(data.acfOptionsContact.contactMetadata.contactFields.addresses.address);
    const serializedOpeningHours = mapOpeningHours(data.acfOptionsContact.contactMetadata.contactFields.openingHours.hours.schedules.schedule);
    
    // menus
    const mainMenuItems = mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems);
    const footerMenuItems = mapFooterMenuItems(data.acfOptionsFooterPrimaryMenu.footerPrimaryMenu.footerMenuItems);
    const footerQuickLinks = mapFooterQuickLinks(data.acfOptionsFooterQuickLinks.footerQuickLinks.footerQuickLinks);
    const legalPages = mapLegalPages(data.acfOptionsLegalPagesMenu.legalPages.legalPagesItems);
    const pageMenuItems = mapPageMenuItems(data.acfOptionsPageMenu.pageMenu.pageMenuItems);
    const serializedSocialNetworks = mapSocialNetworks(data.acfOptionsContact.contactMetadata.contactFields.socialNetworks.socialNetwork);

    const blocks = cleanAndTransformBlocks(data.nodeByUri?.blocks || []);


    console.log("POST STATIC PROPS: ", serializedPosts);

    return {
        props: {
            posts: serializedPosts,
            faqs: data.acfOptionsFaqs.frequentlyAskedQuestions.faqs.faq,

            contentType: data.nodeByUri?.contentType?.node.name || "",
            recentPosts: serializedRecentPosts,
            title: data.nodeByUri?.title || null,
            seo: data.nodeByUri?.seo || null,
            featuredImage: data.nodeByUri?.featuredImage?.node?.sourceUrl || null,
            author: data.nodeByUri?.author || "",
            date: data.nodeByUri?.date || null,
            categories: serializedCategories,
            companySettings: companySettings,

            footerMenuTitle: data.acfOptionsFooterPrimaryMenu.footerPrimaryMenu.footerMenuTitle || null,
            footerLinksTitle: data.acfOptionsFooterQuickLinks.footerQuickLinks.quickLinksTitle || null,
            legalMenuTitle: data.acfOptionsLegalPagesMenu.legalPages.legalMenuTitle || null,
            pageMenuTitle: data.acfOptionsPageMenu.pageMenu.pageMenuTitle || null,
            socialNetworksTitle: data.acfOptionsContact.contactMetadata.contactFields.socialNetworks.title,

            
            mainMenuItems: mainMenuItems,
            footerMenuItems: footerMenuItems,
            footerQuickLinks: footerQuickLinks,
            legalPages: legalPages,
            pageMenuItems: pageMenuItems,
            socialNetworks: serializedSocialNetworks,

            callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
            callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,

            contactFields: data.acfOptionsContact.contactMetadata.contactFields,
            emails: serializedEmails,
            phones: serializedPhones,
            addresses: serializedAddresses,
            openingHours: serializedOpeningHours,

            blocks,

        },
    };
};