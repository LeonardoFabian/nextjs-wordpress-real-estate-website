import { AgentSearch } from "components/AgentSearch";
import { AgentsList } from "components/AgentsList";
import { CallToActionButton } from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { FeatureSection } from "components/FeatureSection";
import { Feature } from "components/FeatureSection/Feature";
import { FormspreeForm } from "components/FormspreeForm";
import { Gallery } from "components/Gallery";
import { Group } from "components/Group";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { PostSearch } from "components/PostSearch";
import { PostsList } from "components/PostsList";
import { PropertyFeatures } from "components/PropertyFeatures";
import { PropertyFilters } from "components/PropertyFilters";
import { PropertiesList } from "components/PropertiesList";
import { PropertySearch } from "components/PropertySearch";
import { SiteLogo } from "components/SiteLogo";
import { TickItem } from "components/TickItem/TickItem";
import Image from "next/image";
import { theme } from "theme";
import { RecentPosts } from "components/RecentPosts";
import ContactForm from "components/ContactForm/ContactForm";
import { ListItem } from "components/List/ListItem";
import { List } from "components/List";
import { Embed } from "components/Embed";

export const BlockRenderer = ({blocks, props}) => {

    // console.log("BLOCKS: ", blocks);
    console.log("BLOCK RENDERER PROPS: ", props);

    return blocks.map(block => {
        switch(block.name) {
            case 'core/embed': {
                // console.log("CORE/EMBED: ", block);
                return (
                    <Embed key={block.id} url={block.attributes.url} />
                )
            }
            case 'core/list': {
                // console.log("CORE/LIST: ", block);
                return (
                    <List key={block.id}>
                        <BlockRenderer blocks={block.innerBlocks} />
                    </List>
                )
            }
            case 'core/list-item': {
                // console.log("LIST ITEM: ", block);
                return (
                    <ListItem key={block.id} content={block.attributes.content} />
                )
            }
            case 'core/group': {
                // console.log("CORE GROUP: ", block);
                return (
                    <Group 
                        key={block.id}
                        align={block.attributes.align}
                        classes={block.attributes.className}
                        layoutType={block.attributes.layout.type}
                        justifyContent={block.attributes.layout.justifyContent}
                        flexWrap={block.attributes.layout.flexWrap}
                    >
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Group>
                )
            }
            case 'core/site-logo': {
                console.log("SITE LOGO: ", block);
                return (
                    <SiteLogo 
                        key={block.id}
                        url={block.attributes.url}
                        width={block.attributes.width}
                        height={block.attributes.height}
                        isLink={block.attributes.isLink}
                        alt={block.attributes.alt}
                    />
                )
            }
            case 'core/gallery': {
                // console.log("GALLERY: ", block);
                return (
                    <Gallery key={block.id} 
                        columns={block.attributes.columns || 3} 
                        imageCrop={block.attributes.imageCrop} 
                        items={block.innerBlocks} 
                    />
                )
            }
            case 'core/group': 
            case 'core/block': {
                return (
                    <BlockRenderer 
                        key={block.id}
                        blocks={block.innerBlocks} 
                    />
                )
            }
            case 'core/image': {
                console.log("IMAGE: ", block);
                return (
                    <Image 
                        key={block.id} 
                        src={block.attributes.url}
                        height={block.attributes.height}
                        width={block.attributes.width}
                        alt={block.attributes.alt || ""}
                    />
                )
            }
            case 'core/columns': {
                // console.log("COLUMNS: ", block);
                return (
                    <Columns 
                        key={block.id} 
                        isStackedOnMobile={block.attributes.isStackedOnMobile} 
                        textColor={
                            theme[block.attributes.textColor] || 
                            block.attributes.style?.color?.text
                        } 
                        backgroundColor={
                            theme[block.attributes.backgroundColor] || 
                            block.attributes.style?.color?.background
                        }
                    >
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Columns>
                )
            } 
            case 'core/column': {
                // console.log("COLUMN: ", block);
                return (
                    <Column 
                        key={block.id}
                        width={block.attributes?.width}
                        textColor={
                            theme[block.attributes?.textColor] || 
                            block.attributes?.style?.color?.text
                        } 
                        backgroundColor={
                            theme[block.attributes?.backgroundColor] || 
                            block.attributes?.style?.color?.background
                        }
                    >
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Column>
                )
            }                       
            case 'core/paragraph' : {
                // console.log("PARAGRAPH: ", block);
                return (
                    <Paragraph key={block.id} 
                        content={block.attributes.content} 
                        textAlign={block.attributes.textAlign} 
                        textColor={
                            theme[block.attributes.textColor] || 
                            block.attributes.style?.color?.text
                        } 
                        backgroundColor={
                            theme[block.attributes.backgroundColor] || 
                            block.attributes.style?.color?.background
                        }
                        fontSize={block.attributes.fontSize}
                        margin={block.attributes.style?.spacing?.margin}
                    />
                )
            }
            case 'core/cover': {
                // console.log("COVER: ", block);
                return (
                    <Cover key={block.id} background={block.attributes.url}>
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Cover>
                )
            }
            case 'core/heading':
            case 'core/post-title': {
                return <Heading key={block.id} textAlign={block.attributes.textAlign} content={block.attributes.content} level={block.attributes.level} />
            }
            case 'acf/cta-button': {
                // console.log("CTA BUTTON", block);
                return (
                    <CallToActionButton 
                        key={block.id} 
                        align={block.attributes.data.align} 
                        destination={block.attributes.data.destination || "/"} 
                        label={block.attributes.data.label} 
                        bgColor={theme[block.attributes.backgroundColor] || ""}
                        textColor={theme[block.attributes.textColor] || ""}
                        margin={block.attributes.style?.spacing?.margin}
                    >
                        {block.attributes.data.label}
                    </CallToActionButton>
                )
            }
            case 'acf/property-search': {
                return (
                    <PropertySearch key={block.id} />
                )
            }
            case 'acf/formspree-form': {
                // console.log("FORMSPREE FORM: ", block);
                return (
                    <>
                    <FormspreeForm key={block.id} formId={block.attributes.data.form_id} />
                        <div className="container max-w-lg">
                            <ContactForm />
                        </div>
                    </>
                )
            }
            case 'acf/property-features': {
                // console.log("PROPERTY FEATURES: ", block);
                return (
                    <PropertyFeatures key={block.id} 
                        price={block.attributes.price}
                        bedrooms={block.attributes.bedrooms}
                        bathrooms={block.attributes.bathrooms}
                        hasParking={block.attributes.has_parking}
                        petFriendly={block.attributes.pet_friendly}
                    />
                )
            }
            case 'acf/tick-item': {
                // console.log("TICK ITEM: ", block);
                return (
                    <TickItem key={block.id}>
                        <BlockRenderer blocks={block.innerBlocks} />
                    </TickItem>
                )
            }
            case 'acf/real-estate-agent-search': {
                // console.log("AGENT SEARCH: ", block);
                return (
                    <AgentSearch key={block.id} />
                )
            }
            case 'acf/real-estate-agents-list': {
                // console.log("AGENTS LIST: ", block);
                return (
                    <AgentsList key={block.id} />
                )
            }
            case 'acf/properties-filters': {
                // console.log("PROPERTIES FILTERS: ", block);
                return (
                    <PropertyFilters key={block.id} />
                )
            }
            case 'acf/properties-list': {
                // console.log("PROPERTIES LIST: ", block);
                return (
                    <PropertiesList key={block.id} />
                )
            }
            case 'acf/posts-list': {
                // console.log("POSTS LIST: ", block);
                return (
                    <PostsList key={block.id} />
                )
            }
            case 'acf/recent-posts': {
                // console.log("RECENT POSTS: ", block);
                return (
                    <RecentPosts key={block.id} />
                )
            }
            case 'acf/post-search': {
                // console.log("POST SEARCH: ", block);
                return (
                    <PostSearch key={block.id} />
                )
            }
            case 'abpsd/feature-section': {
                // console.log("FEATURE SECTION: ", block);
                return (
                    <FeatureSection 
                        key={block.id}
                        title={block.attributes.title || null}
                        content={block.attributes.content || null}
                    >
                        <BlockRenderer blocks={block.innerBlocks} />
                    </FeatureSection>
                )
            }
            case 'abpsd/feature': {
                // console.log("FEATURE: ", block);
                return (
                    <Feature 
                        key={block.id}
                        title={block.attributes.title || null}
                        content={block.attributes.content || null}
                        imageUrl={block.attributes.imageUrl}
                        imageId={block.attributes.imageId}
                        imageAlt={block.attributes.imageAlt || null}
                        foregroundColor={block.attributes.foregroundColor.color || null}
                        backgroundColor={block.attributes.backgroundColor.backgroundColor}
                    >
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Feature>
                )
            }
            default: {
                console.log("UNKNOWN: ", block);
                return null;
            }                
        }
    })
}