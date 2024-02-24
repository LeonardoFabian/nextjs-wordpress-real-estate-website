import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "utils/mapMainMenuItems";
import { mapFooterMenuItems } from "./mapFooterMenuItems";
import { mapFooterQuickLinks } from "./mapFooterQuickLinks";
import { mapSocialLinks } from "./mapSocialLinks";
import { mapLegalPages } from "./mapLegalPages";
import { mapPageMenuItems } from "./mapPageMenuItems";
import { mapCompanySettings } from "./mapCompanySettings";
import { mapSocialNetworks } from "./mapSocialNetworks";
import { mapEmails } from "./mapEmails";
import { mapPhones } from "./mapPhones";
import { mapAddresses } from "./mapAddresses";
import { mapOpeningHours } from "./mapOpeningHours";
import { mapWPForms } from './mapForms';
import { mapCategories } from "./mapCategories";
import { mapPosts } from "./mapPosts";
import { mapFeatures } from "./mapFeatures";
import { mapPropertyLocation } from "./mapPropertyLocation";
import { mapState } from "./mapState";
import { mapCountries } from "./mapCountries";

export const getPageStaticProps = async (context) => {

  console.log("-------------------------------------------------------------------------CONTEXT: ", context);

  let slug = ``;

  if(context?.params?.slug?.length > 0) {
    slug = context.params.slug;
  }

  if(
    slug && 
    slug.length > 1 && 
    slug[0] === 'blog'
  ) {
    slug.shift(); // remove the first element of single post to retrieve the post blocks
  } 

  const uri = slug ? `/${slug.join("/")}/` : "/";

    console.log("VARIABLE URI: ", uri);

    const {data} = await client.query({
      query: gql`
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
                  sourceUrl
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
              blocks(postTemplate: true)
              featuredImage {
                node {
                  sourceUrl
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
                  sourceUrl
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
                  name
                  avatar {
                    url
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
          acfOptionsForms {
            wpForms {
              acfWpForms {
                acfWpForm {
                  acfWpFormLabel
                  acfWpFormSelect
                  position
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
  
    const mainMenuItems = mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems);
    const footerMenuItems = mapFooterMenuItems(data.acfOptionsFooterPrimaryMenu.footerPrimaryMenu.footerMenuItems);
    const footerQuickLinks = mapFooterQuickLinks(data.acfOptionsFooterQuickLinks.footerQuickLinks.footerQuickLinks);
    const legalPages = mapLegalPages(data.acfOptionsLegalPagesMenu.legalPages.legalPagesItems);
    const pageMenuItems = mapPageMenuItems(data.acfOptionsPageMenu.pageMenu.pageMenuItems);
    // const socialLinks = mapSocialLinks(data.acfOptionsSocialMenu.socialMenu.socialMenuItems);
    const companySettings = mapCompanySettings(data.themeGeneralSettings.generalSettings.companySettings || null);
    const serializedSocialNetworks = mapSocialNetworks(data.acfOptionsContact.contactMetadata.contactFields.socialNetworks.socialNetwork);
    const serializedEmails = mapEmails(data.acfOptionsContact.contactMetadata.contactFields.emails.email);
    const serializedPhones = mapPhones(data.acfOptionsContact.contactMetadata.contactFields.phones.phone);
    const serializedAddresses = mapAddresses(data.acfOptionsContact.contactMetadata.contactFields.addresses.address);
    const serializedOpeningHours = mapOpeningHours(data.acfOptionsContact.contactMetadata.contactFields.openingHours.hours.schedules.schedule);
    const serializedLocation = data.acfOptionsContact.contactMetadata.contactFields.location;
    const serializedWPForms = mapWPForms(data.acfOptionsForms.wpForms.acfWpForms.acfWpForm);
    const serializedCategories = mapCategories(data.nodeByUri.categories?.edges);
    // const footerMenuItems = '';
    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks || []);
    const serializedPosts = mapPosts(data.posts.edges);
    const serializedRecentPosts = mapPosts(data.recentPosts.edges);
    const serializedFeatures = mapFeatures(data.nodeByUri.features?.edges);
    const serializedPropertyLocations = mapPropertyLocation(data.nodeByUri.locations?.edges || []);
    const serializedPropertyCities = mapPropertyLocation(data.nodeByUri.cities?.edges || []);
    const serializedPropertyStates = mapPropertyLocation(data.nodeByUri.states?.edges || []);
    const serializedPropertyCountries = mapPropertyLocation(data.nodeByUri.countries?.edges || []);

    console.log("BLOCK FROM CLEAN AND TRANSFORM BLOCKS.............", blocks);
  
    return {
      props: {
        posts: serializedPosts,
        author: data.nodeByUri.author || "",
        recentPosts: serializedRecentPosts,
        contentType: data.nodeByUri.contentType.node.name || "",
        seo: data.nodeByUri.seo || null,
        title: data.nodeByUri.title || null,
        date: data.nodeByUri.date || null,
        categories: serializedCategories,
        companySettings: companySettings,
        propertyFeatures: data.nodeByUri.propertyFeatures || null,
        features: serializedFeatures || null,
        propertyLocation: serializedPropertyLocations || null,
        propertyCity: serializedPropertyCities || null,
        propertyState: serializedPropertyStates || null,
        propertyCountry: serializedPropertyCountries || null,
        featuredImage: data.nodeByUri.featuredImage?.node?.sourceUrl || null,
        mainMenuItems: mainMenuItems,
        footerMenuTitle: data.acfOptionsFooterPrimaryMenu.footerPrimaryMenu.footerMenuTitle || null,
        footerMenuItems: footerMenuItems,
        footerLinksTitle: data.acfOptionsFooterQuickLinks.footerQuickLinks.quickLinksTitle || null,
        footerQuickLinks: footerQuickLinks,
        legalMenuTitle: data.acfOptionsLegalPagesMenu.legalPages.legalMenuTitle || null,
        legalPages: legalPages,
        pageMenuTitle: data.acfOptionsPageMenu.pageMenu.pageMenuTitle || null,
        pageMenuItems: pageMenuItems,
        callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
        callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
        faqs: data.acfOptionsFaqs.frequentlyAskedQuestions.faqs.faq,
        socialNetworksTitle: data.acfOptionsContact.contactMetadata.contactFields.socialNetworks.title,
        socialNetworks: serializedSocialNetworks,
        contactFields: data.acfOptionsContact.contactMetadata.contactFields,
        emails: serializedEmails,
        phones: serializedPhones,
        addresses: serializedAddresses,
        openingHours: serializedOpeningHours,
        wpForms: serializedWPForms,
        blocks,
      },
    };
  };


