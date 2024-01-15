import { CallToActionButton } from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { FormspreeForm } from "components/FormspreeForm";
import { Gallery } from "components/Gallery";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { PropertyFeatures } from "components/PropertyFeatures";
import { PropertySearch } from "components/PropertySearch";
import { TickItem } from "components/TickItem/TickItem";
import Image from "next/image";
import { theme } from "theme";

export const BlockRenderer = ({blocks}) => {
    // console.log("BLOCKS: ", blocks);
    return blocks.map(block => {
        switch(block.name) {
            case 'core/gallery': {
                console.log("GALLERY: ", block);
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
                console.log("COLUMNS: ", block);
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
                console.log("COLUMN: ", block);
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
                console.log("PARAGRAPH: ", block);
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
                console.log("COVER: ", block);
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
                return (
                    <CallToActionButton 
                        key={block.id} 
                        align={block.attributes.data.align} 
                        destination={block.attributes.data.destination || "/"} 
                        label={block.attributes.data.label} 
                    />
                )
            }
            case 'acf/property-search': {
                return (
                    <PropertySearch key={block.id} />
                )
            }
            case 'acf/formspree-form': {
                console.log("FORMSPREE FORM: ", block);
                return (
                    <FormspreeForm key={block.id} formId={block.attributes.data.form_id} />
                )
            }
            case 'acf/property-features': {
                console.log("PROPERTY FEATURES: ", block);
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
                console.log("TICK ITEM: ", block);
                return (
                    <TickItem key={block.id}>
                        <BlockRenderer blocks={block.innerBlocks} />
                    </TickItem>
                )
            }
            default: {
                console.log("UNKNOWN: ", block);
                return null;
            }                
        }
    })
}