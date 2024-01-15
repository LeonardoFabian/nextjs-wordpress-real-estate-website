import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "utils/mapMainMenuItems";

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
        }
      `,
      variables: {
        uri,
      },
    });
  
    const mainMenuItems = mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems);
    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);

    console.log("BLOCK FROM CLEAN AND TRANSFORM BLOCKS.............", blocks);
  
    return {
      props: {
        seo: data.nodeByUri.seo,
        title: data.nodeByUri.title,
        propertyFeatures: data.nodeByUri.propertyFeatures || null,
        featuredImage: data.nodeByUri.featuredImage?.node?.sourceUrl || null,
        mainMenuItems: mainMenuItems,
        callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
        callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
        blocks,
      },
    };
  };