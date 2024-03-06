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

export const getPageCategoryStaticProps = async (context) => {

  // console.log("CONTEXT: ", context);

  // const {contentType, slug} = context.params;

    if(
      context.params?.slug && 
      context.params?.slug.length > 1 && 
      context.params?.slug[0] == 'blog'
    ) {
      context.params?.slug.shift(); // remove the first element of single post to retrieve the post blocks
    } 

    // if(!context.params?.contentType){
    //   context.params.contentType = "page";
    // }

  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
  // const contentType = context.params?.contentType ? context.params.contentType : "page";

    console.log("VARIABLE URI: ", uri);
    // console.log("VARIABLE CONTENT TYPE: ", contentType);

    const {data} = await client.query({
      query: gql`
        query PageQuery($uri: String!) {
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
                nodes {
                  name
                  slug
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
                bathrooms
                bedrooms
                hasParking
                petFriendly
                price
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
    const serializedCategories = mapCategories(data.nodeByUri.categories?.nodes) || null;
    // const footerMenuItems = '';
    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);

    console.log("BLOCK FROM CLEAN AND TRANSFORM BLOCKS.............", blocks);
  
    return {
      props: {
        contentType: data.nodeByUri.contentType.node.name,
        seo: data.nodeByUri.seo,
        title: data.nodeByUri.title,
        date: data.nodeByUri.date || null,
        categories: serializedCategories || null,
        companySettings: companySettings,
        propertyFeatures: data.nodeByUri.propertyFeatures || null,
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


``