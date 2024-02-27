import { ContentTypeProvider } from "context/ContentTypeContext";
import Head from "next/head";
import { MainMenu } from "components/MainMenu";
import { Footer } from "components/Footer";
import ContactLayout from "components/Layouts/ContactLayout/ContactLayout";
import { BlockRenderer } from "components/BlockRenderer";

export const Contact = (props) => {
    console.log("CONTACT PROPS: ", props);

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
            
            <ContactLayout>
                <BlockRenderer blocks={props.blocks} />
            </ContactLayout>

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
}