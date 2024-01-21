import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "utils/mapMainMenuItems";
import { mapFooterMenuItems } from "./mapFooterMenuItems";
import { mapFooterQuickLinks } from "./mapFooterQuickLinks";
import { mapSocialLinks } from "./mapSocialLinks";
import { mapLegalPages } from "./mapLegalPages";
import { mapPageMenuItems } from "./mapPageMenuItems";

export const getPageStaticProps = async (context) => {
    console.log("CONTEXT: ", context);
    const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

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
                    ...on Page {
                      uri
                    }
                  }
                  label
                }
                menuItem {
                  destination {
                    ...on Page {
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
              title
              menuItems {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
          acfOptionsFooterQuickLinks {
            footerQuickLinks {
              title
              menuItems {
                label
                url {
                  title
                  url
                  target
                }
              }
            }
          }
          acfOptionsLegalPagesMenu {
            legalPages {
              menuItems {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
          acfOptionsSocialMenu {
            socialMenu {
              menuItems {
                label
                socialNetwork
                url {
                  target
                  title
                  url
                }
              }
            }
          }
          acfOptionsPageMenu {
            pageMenu {
              menuItems {
                menuItem {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
                items {
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
        }
      `,
      variables: {
        uri,
      },
    });
  
    const mainMenuItems = mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems);
    const footerMenuItems = mapFooterMenuItems(data.acfOptionsFooterPrimaryMenu.footerPrimaryMenu.menuItems);
    const footerQuickLinks = mapFooterQuickLinks(data.acfOptionsFooterQuickLinks.footerQuickLinks.menuItems);
    const socialLinks = mapSocialLinks(data.acfOptionsSocialMenu.socialMenu.menuItems);
    const legalPages = mapLegalPages(data.acfOptionsLegalPagesMenu.legalPages.menuItems);
    const pageMenuItems = mapPageMenuItems(data.acfOptionsPageMenu.pageMenu.menuItems);
    // const footerMenuItems = '';
    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);

    console.log("BLOCK FROM CLEAN AND TRANSFORM BLOCKS.............", blocks);
  
    return {
      props: {
        seo: data.nodeByUri.seo,
        title: data.nodeByUri.title,
        propertyFeatures: data.nodeByUri.propertyFeatures || null,
        featuredImage: data.nodeByUri.featuredImage?.node?.sourceUrl || null,
        mainMenuItems: mainMenuItems,
        footerMenuTitle: data.acfOptionsFooterPrimaryMenu.footerPrimaryMenu.title || null,
        footerMenuItems: footerMenuItems,
        footerLinksTitle: data.acfOptionsFooterQuickLinks.footerQuickLinks.title || null,
        footerQuickLinks: footerQuickLinks,
        socialLinks: socialLinks,
        legalPages: legalPages,
        pageMenuItems: pageMenuItems,
        callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
        callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
        blocks,
      },
    };
  };