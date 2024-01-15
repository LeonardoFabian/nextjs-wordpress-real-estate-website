import { MainMenu } from "components/MainMenu"
import { BlockRenderer } from "components/BlockRenderer"
import { PageWrapper } from "context/page";
import Head from "next/head";

export const Page = (props) => {
    console.log("PAGE PROPS: ", props);
    return (
        <PageWrapper
            value={{ 
                propertyFeatures: props.propertyFeatures,
                title: props.title,
                featuredImage: props.featuredImage,
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
        </PageWrapper>        
    );
};