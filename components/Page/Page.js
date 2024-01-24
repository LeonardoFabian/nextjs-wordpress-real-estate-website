import { MainMenu } from "components/MainMenu"
import { BlockRenderer } from "components/BlockRenderer"
import { PageWrapper } from "context/page";
import Head from "next/head";
import { Footer } from "components/Footer";

export const Page = (props) => {
    console.log("PAGE PROPS: ", props);
    return (
        <PageWrapper
            value={{ 
                propertyFeatures: props.propertyFeatures,
                title: props.title,
                featuredImage: props.featuredImage,
                pageMenuTitle: props.pageMenuTitle,
                pageMenuItems: props.pageMenuItems
            }}
        >
            <Head>
                <title>{props.seo.title}</title>
                <meta name="description" content={props.seo.metaDesc} />
            </Head>
            <MainMenu 
                items={props.mainMenuItems} 
                callToActionLabel={props.callToActionLabel} 
                callToActionDestination={props.callToActionDestination}
            />
            <BlockRenderer blocks={props.blocks} />
            <Footer 
                footerMenuTitle={props.footerMenuTitle}
                footerMenuItems={props.footerMenuItems}
                footerLinksTitle={props.footerLinksTitle}
                footerQuickLinks={props.footerQuickLinks}
                socialMenuTitle={props.socialMenuTitle}
                socialLinks={props.socialLinks}
                legalMenuTitle={props.legalMenuTitle}
                legalPages={props.legalPages}
            />
        </PageWrapper>        
    );
};