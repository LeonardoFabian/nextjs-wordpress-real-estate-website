import { BlockRenderer } from "components/BlockRenderer";
import { Footer } from "components/Footer";
import PageLayout from "components/Layouts/PageLayout/PageLayout";
import PostLayout from "components/Layouts/PostLayout/PostLayout";
import { MainMenu } from "components/MainMenu";
import { ContentTypeProvider } from "context/ContentTypeContext";
import Head from "next/head";

export const Posts = (props) => {

    console.log("POSTS PROPS: ", props);

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
            {props.contentType === 'post' ? (
                <PostLayout title={props.title} dateTime={props.date} featuredImage={props.featuredImage} categories={props.categories}>
                    <div className="mx-auto px-6 lg:px-0">
                        <BlockRenderer blocks={props.blocks} />
                    </div>
                </PostLayout>  
            ) : null}   
           
        </ContentTypeProvider>
    )
}