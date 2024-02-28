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

export const getPageStaticProps = async ({params}) => {

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

    const {data, loading, error} = await client.query({
      query: GET_PAGES_BY_URI,
      variables: {
        uri,
      },
    });
  
    // header
    const mainMenuItems = mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems);
    const callToActionLabel = data.acfOptionsMainMenu.mainMenu.callToActionButton.label;
    const callToActionDestination = data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri;

    const footerMenuItems = mapFooterMenuItems(data.acfOptionsFooterPrimaryMenu.footerPrimaryMenu.footerMenuItems);
    const footerQuickLinks = mapFooterQuickLinks(data.acfOptionsFooterQuickLinks.footerQuickLinks.footerQuickLinks);
    const legalPages = mapLegalPages(data.acfOptionsLegalPagesMenu.legalPages.legalPagesItems);
    const pageMenuItems = mapPageMenuItems(data.acfOptionsPageMenu.pageMenu.pageMenuItems);
    const serializedSocialNetworks = mapSocialNetworks(data.acfOptionsContact.contactMetadata.contactFields.socialNetworks.socialNetwork);
    
    // const socialLinks = mapSocialLinks(data.acfOptionsSocialMenu.socialMenu.socialMenuItems);
    const companySettings = mapCompanySettings(data.themeGeneralSettings.generalSettings.companySettings || null);
    const serializedEmails = mapEmails(data.acfOptionsContact.contactMetadata.contactFields.emails.email);
    const serializedPhones = mapPhones(data.acfOptionsContact.contactMetadata.contactFields.phones.phone);
    const serializedAddresses = mapAddresses(data.acfOptionsContact.contactMetadata.contactFields.addresses.address);
    const serializedOpeningHours = mapOpeningHours(data.acfOptionsContact.contactMetadata.contactFields.openingHours.hours.schedules.schedule);
    const serializedLocation = data.acfOptionsContact.contactMetadata.contactFields.location;
    // const serializedWPForms = mapWPForms(data.acfOptionsForms.Forms.acfWpForms.acfWpForm);
    const serializedCategories = mapCategories(data.nodeByUri?.categories?.edges);
    // const footerMenuItems = '';
    const blocks = cleanAndTransformBlocks(data.nodeByUri?.blocks || []);
    const serializedPosts = mapPosts(data.posts.edges);
    const serializedRecentPosts = mapPosts(data.recentPosts.edges);
    const serializedFeatures = mapFeatures(data.nodeByUri?.features?.edges);
    const serializedPropertyLocations = mapPropertyLocation(data.nodeByUri?.locations?.edges || []);
    const serializedPropertyCities = mapPropertyLocation(data.nodeByUri?.cities?.edges || []);
    const serializedPropertyStates = mapPropertyLocation(data.nodeByUri?.states?.edges || []);
    const serializedPropertyCountries = mapPropertyLocation(data.nodeByUri?.countries?.edges || []);

    console.log("BLOCK FROM CLEAN AND TRANSFORM BLOCKS.............", blocks);
  
    return {
      props: {
        mainMenuItems: mainMenuItems,
        callToActionLabel: callToActionLabel,
        callToActionDestination: callToActionDestination,

        loading,
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
        propertyFeatures: data.nodeByUri?.propertyFeatures || null,
        features: serializedFeatures || null,
        propertyLocation: serializedPropertyLocations || null,
        propertyCity: serializedPropertyCities || null,
        propertyState: serializedPropertyStates || null,
        propertyCountry: serializedPropertyCountries || null,

        footerMenuTitle: data.acfOptionsFooterPrimaryMenu.footerPrimaryMenu.footerMenuTitle || null,
        footerLinksTitle: data.acfOptionsFooterQuickLinks.footerQuickLinks.quickLinksTitle || null,
        legalMenuTitle: data.acfOptionsLegalPagesMenu.legalPages.legalMenuTitle || null,
        pageMenuTitle: data.acfOptionsPageMenu.pageMenu.pageMenuTitle || null,
        socialNetworksTitle: data.acfOptionsContact.contactMetadata.contactFields.socialNetworks.title,
        
        footerMenuItems: footerMenuItems,
        footerQuickLinks: footerQuickLinks,
        legalPages: legalPages,
        pageMenuItems: pageMenuItems,
        socialNetworks: serializedSocialNetworks,

        
        
        contactFields: data.acfOptionsContact.contactMetadata.contactFields,
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


