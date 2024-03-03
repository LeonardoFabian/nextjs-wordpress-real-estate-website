import { useRouter } from "next/router";
import { MainMenu } from "components/MainMenu"
import { BlockRenderer } from "components/BlockRenderer"
import { PageProvider } from "context/page";
// import Script from "next/script";
import Head from "next/head";
import { Footer } from "components/Footer";
import { ContentTypeProvider } from "context/ContentTypeContext";
import PostLayout from "components/Layouts/PostLayout/PostLayout";
import PageLayout from "components/Layouts/PageLayout/PageLayout";
import PropertyLayout from "components/Layouts/PropertyLayout/PropertyLayout";
import UserLayout from "components/Layouts/UserLayout/UserLayout";
// import { Heading } from "components/Heading";
// import { ContactLayout } from "components/Layouts/ContactLayout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import GoogleAnalytics from "components/GoogleAnalytics/GoogleAnalytics";

export const Page = (props) => {

    console.log("PAGE PROPS: ", props);

    const analyticsCookies = process.env.NEXT_PUBLIC_ANALYTICS_COOKIES_NAME;
    const [isAcceptedAnalyticsCookies, setIsAcceptedAnalyticsCookies] = useState(false);

    const router = useRouter();
    console.log("ROUTER: ", router);

    useEffect(() => {
        const googleAnalyticsCookies = Cookies.get(analyticsCookies);

        if(googleAnalyticsCookies) {
            setIsAcceptedAnalyticsCookies(true);
        } else {
            setIsAcceptedAnalyticsCookies(false);
        }
    }, []);

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

            {!!isAcceptedAnalyticsCookies && <GoogleAnalytics />}
            
                <MainMenu 
                    items={props.mainMenuItems} 
                    callToActionLabel={props.callToActionLabel} 
                    callToActionDestination={props.callToActionDestination}
                />     
                {props.contentType === 'page' && props.user ? (
                    <UserLayout user={props.user}/>
                ) : null} 
                {props.contentType === 'page' ? (
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