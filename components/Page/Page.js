import { useRouter } from "next/router";
import { MainMenu } from "components/MainMenu"
import { BlockRenderer } from "components/BlockRenderer"
import { PageProvider } from "context/page";
import Script from "next/script";
import Head from "next/head";
import { Footer } from "components/Footer";
import { ContentTypeProvider, useContentType } from "context/ContentTypeContext";
import PostLayout from "components/Layouts/PostLayout/PostLayout";
import PageLayout from "components/Layouts/PageLayout/PageLayout";
import PropertyLayout from "components/Layouts/PropertyLayout/PropertyLayout";
import { Heading } from "components/Heading";
import { ContactLayout } from "components/Layouts/ContactLayout";

export const Page = (props) => {

    console.log("PAGE PROPS: ", props);

    const router = useRouter();

    console.log("ROUTER: ", router);
    const {slug} = router.query;
    // const contentType = useContentType();

    // console.log("PAGE CONTENT TYPE: ", contentType);

    // return (
    //     <PageProvider
    //         value={{ 
    //             propertyFeatures: props.propertyFeatures,
    //             title: props.title,
    //             featuredImage: props.featuredImage,
    //             pageMenuTitle: props.pageMenuTitle,
    //             pageMenuItems: props.pageMenuItems,
    //             companySettings: props.companySettings,
    //             faqs: props.faqs,
    //             contactFields: props.contactFields,                
    //         }}
    //     >
    //         <Head>
    //             <title>{props.seo.title}</title>
    //             <meta name="description" content={props.seo.metaDesc} />
    //         </Head>
    //         <MainMenu 
    //             items={props.mainMenuItems} 
    //             callToActionLabel={props.callToActionLabel} 
    //             callToActionDestination={props.callToActionDestination}
    //         />
    //         <BlockRenderer blocks={props.blocks} />
    //         <Footer 
    //             footerMenuTitle={props.footerMenuTitle}
    //             footerMenuItems={props.footerMenuItems}
    //             footerLinksTitle={props.footerLinksTitle}
    //             footerQuickLinks={props.footerQuickLinks}
    //             legalMenuTitle={props.legalMenuTitle}
    //             legalPages={props.legalPages}
    //             companySettings={props.companySettings}
    //             socialNetworksTitle={props.socialNetworksTitle}
    //             socialNetworks={props.socialNetworks}
    //             emails={props.emails}
    //             phones={props.phones}
    //             addresses={props.addresses}
    //             openingHours={props.openingHours}
    //             wpForms={props.wpForms}
    //         />
    //         <Script 
    //             src='http://candelarioconsultores.local/wp-content/plugins/wpforms-lite/assets/js/wpforms.min.js' 
    //             strategy="afterInteractive"
    //         />
    //     </PageProvider>        
    // );

    // if(router.isFallback) {
    //     return (
    //         <h1 className="text-5xl text-slate-700">
    //             Loading...
    //         </h1>
    //     )
    // }


        // if(props.isLoading) {
        //     return (<h1>Loading...</h1>)
        // }
   

    return (
        <ContentTypeProvider 
            value={{ 
                contentType: props.contentType,
                propertyFeatures: props.propertyFeatures,
                features: props.features,
                title: props.title,
                date: props.date,
                categories: props.categories,
                featuredImage: props.featuredImage,
                pageMenuTitle: props.pageMenuTitle,
                pageMenuItems: props.pageMenuItems,
                companySettings: props.companySettings,
                faqs: props.faqs,
                contactFields: props.contactFields, 
                author: props.author,
            }}        
        >        
            <Head>
                <title>{props.seo?.title || "Site title"}</title>
                <meta name="description" content={props.seo?.metaDesc || "Site meta description" } />
            </Head>
            
            <MainMenu 
                items={props.mainMenuItems} 
                callToActionLabel={props.callToActionLabel} 
                callToActionDestination={props.callToActionDestination}
            />      
            {props.contentType === 'page' || props.contentType === '' ? (
                <PageLayout>
                    <BlockRenderer blocks={props.blocks} />
                </PageLayout>
            ) : null} 
            {props.contentType === 'property' ? (
                <PropertyLayout 
                    title={props.title} 
                    blocks={props.blocks}
                    author={props.author}
                    featuredImage={props.featuredImage}
                    propertyFeatures={props.propertyFeatures}
                    categories={props.categories}
                    features={props.features}
                    propertyLocation={props.propertyLocation}
                    propertyCity={props.propertyCity}
                    propertyState={props.propertyState}
                    propertyCountry={props.propertyCountry}
                    callToActionLabel={props.callToActionLabel}
                    callToActionDestination={props.callToActionDestination}
                >
                    <BlockRenderer blocks={props.blocks} props={props} />
                </PropertyLayout>
            ) : null}  
            {props.contentType === 'post' ? (
                <PostLayout title={props.title} dateTime={props.date} featuredImage={props.featuredImage} categories={props.categories}>
                    <div className="mx-auto px-6 lg:px-0">
                        <BlockRenderer blocks={props.blocks} />
                    </div>
                </PostLayout>  
            ) : null}       
            <Footer 
                footerMenuTitle={props.footerMenuTitle}
                footerMenuItems={props.footerMenuItems}
                footerLinksTitle={props.footerLinksTitle}
                footerQuickLinks={props.footerQuickLinks}
                legalMenuTitle={props.legalMenuTitle}
                legalPages={props.legalPages}
                companySettings={props.companySettings}
                socialNetworksTitle={props.socialNetworksTitle}
                socialNetworks={props.socialNetworks}
                emails={props.emails}
                phones={props.phones}
                addresses={props.addresses}
                openingHours={props.openingHours}
                // wpForms={props.wpForms}
            />
        </ContentTypeProvider>
    )
};