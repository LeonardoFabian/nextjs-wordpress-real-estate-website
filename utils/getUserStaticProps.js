import { gql, useQuery } from "@apollo/client";
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
import { GET_PAGES_BY_URI } from "queries";
import { GET_USER_BY_URI } from "queries/getUserByUri";
import { GET_POST_BY_URI } from "queries/getPostByUri";

export const getUserStaticProps = async ({params}) => {

  console.log("------------------------------------------------------------------------- GET PAGE STATIC PROPS PARAMS: ", params);

  // let uri = ``;

  // if(params?.uri?.length > 0) {
  //   uri = params.uri;
  // }

  // if(
  //   params.uri && 
  //   params.uri.length > 1 && 
  //   params.uri[0] === 'blog'
  // ) {
  //   params.uri.shift(); // remove the first element of single post to retrieve the post blocks
  // } 

  const uri = params?.uri ? `/${params.uri.join("/")}/` : "/";
  // const uri = params?.uri ? params.uri : "/";
  // const uri = context.params.slug ? `/${context.params.slug.join("/")}/` : "/";

  console.log("VARIABLE URI: ", uri);

    const {data: pageData} = await client.query({
      query: GET_PAGES_BY_URI,
      variables: {
        uri,
      },
    });  

    const {data: postData} = await client.query({
      query: GET_POST_BY_URI,
      variables: {
        id: uri,
      },
    });

    const {data: userData} = await client.query({
      query: GET_USER_BY_URI,
      variables: {
        id: uri,
      },
    });

    // if(postError) console.log("POST ERROR: ", postError);

  
    // header
    const mainMenuItems = mapMainMenuItems(pageData.acfOptionsMainMenu.mainMenu.menuItems);
    const callToActionLabel = pageData.acfOptionsMainMenu.mainMenu.callToActionButton.label;
    const callToActionDestination = pageData.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri;

    const footerMenuItems = mapFooterMenuItems(pageData.acfOptionsFooterPrimaryMenu.footerPrimaryMenu.footerMenuItems);
    const footerQuickLinks = mapFooterQuickLinks(pageData.acfOptionsFooterQuickLinks.footerQuickLinks.footerQuickLinks);
    const legalPages = mapLegalPages(pageData.acfOptionsLegalPagesMenu.legalPages.legalPagesItems);
    const pageMenuItems = mapPageMenuItems(pageData.acfOptionsPageMenu.pageMenu.pageMenuItems);
    const serializedSocialNetworks = mapSocialNetworks(pageData.acfOptionsContact.contactMetadata.contactFields.socialNetworks.socialNetwork);
    
    // const socialLinks = mapSocialLinks(pageData.acfOptionsSocialMenu.socialMenu.socialMenuItems);
    const companySettings = mapCompanySettings(pageData.themeGeneralSettings.generalSettings.companySettings || null);
    const serializedEmails = mapEmails(pageData.acfOptionsContact.contactMetadata.contactFields.emails.email);
    const serializedPhones = mapPhones(pageData.acfOptionsContact.contactMetadata.contactFields.phones.phone);
    const serializedAddresses = mapAddresses(pageData.acfOptionsContact.contactMetadata.contactFields.addresses.address);
    const serializedOpeningHours = mapOpeningHours(pageData.acfOptionsContact.contactMetadata.contactFields.openingHours.hours.schedules.schedule);
    const serializedLocation = pageData.acfOptionsContact.contactMetadata.contactFields.location;
    // const serializedWPForms = mapWPForms(pageData.acfOptionsForms.Forms.acfWpForms.acfWpForm);
    const serializedCategories = mapCategories(pageData.nodeByUri?.categories?.edges);
    // const footerMenuItems = '';
    const blocks = cleanAndTransformBlocks(pageData.nodeByUri?.blocks || []);
    const serializedPosts = mapPosts(pageData.posts.edges);
    const serializedRecentPosts = mapPosts(pageData.recentPosts.edges);
    const serializedFeatures = mapFeatures(pageData.nodeByUri?.features?.edges);
    const serializedPropertyLocations = mapPropertyLocation(pageData.nodeByUri?.locations?.edges || []);
    const serializedPropertyCities = mapPropertyLocation(pageData.nodeByUri?.cities?.edges || []);
    const serializedPropertyStates = mapPropertyLocation(pageData.nodeByUri?.states?.edges || []);
    const serializedPropertyCountries = mapPropertyLocation(pageData.nodeByUri?.countries?.edges || []);
    const contentType = pageData.nodeByUri?.contentType ? pageData.nodeByUri?.contentType?.node.name : "page";

    console.log("BLOCK FROM CLEAN AND TRANSFORM BLOCKS.............", blocks);
  
    return {
      props: {
        mainMenuItems: mainMenuItems,
        callToActionLabel: callToActionLabel,
        callToActionDestination: callToActionDestination,

        user: userData.user || [],
        post: postData.post || [],
        posts: serializedPosts,
        faqs: pageData.acfOptionsFaqs.frequentlyAskedQuestions.faqs.faq,

        contentType: contentType || null,
        recentPosts: serializedRecentPosts,
        title: pageData.nodeByUri?.title || null,
        seo: pageData.nodeByUri?.seo || null,
        featuredImage: pageData.nodeByUri?.featuredImage?.node?.sourceUrl || null,
        author: pageData.nodeByUri?.author || "",
        date: pageData.nodeByUri?.date || null,
        categories: serializedCategories,
        companySettings: companySettings,
        propertyFeatures: pageData.nodeByUri?.propertyFeatures || null,
        features: serializedFeatures || null,
        propertyLocation: serializedPropertyLocations || null,
        propertyCity: serializedPropertyCities || null,
        propertyState: serializedPropertyStates || null,
        propertyCountry: serializedPropertyCountries || null,

        footerMenuTitle: pageData.acfOptionsFooterPrimaryMenu.footerPrimaryMenu.footerMenuTitle || null,
        footerLinksTitle: pageData.acfOptionsFooterQuickLinks.footerQuickLinks.quickLinksTitle || null,
        legalMenuTitle: pageData.acfOptionsLegalPagesMenu.legalPages.legalMenuTitle || null,
        pageMenuTitle: pageData.acfOptionsPageMenu.pageMenu.pageMenuTitle || null,
        socialNetworksTitle: pageData.acfOptionsContact.contactMetadata.contactFields.socialNetworks.title,
        
        footerMenuItems: footerMenuItems,
        footerQuickLinks: footerQuickLinks,
        legalPages: legalPages,
        pageMenuItems: pageMenuItems,
        socialNetworks: serializedSocialNetworks,

        
        
        contactFields: pageData.acfOptionsContact.contactMetadata.contactFields,
        emails: serializedEmails,
        phones: serializedPhones,
        addresses: serializedAddresses,
        openingHours: serializedOpeningHours,
        // wpForms: serializedWPForms,
        blocks,
      },
      revalidate: 1
    };
  };


