import { useContentType } from "context/ContentTypeContext";
import Layout from "../Layout"
import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { BlockRenderer } from "components/BlockRenderer";
import { PropertyFeatures } from "components/PropertyFeatures";
import { AgentCard } from "./AgentCard";
import numeral from "numeral";
import { mapCurrencyCode } from "utils/currency";
import { Badge } from "components/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRightToLine, faBath, faBed, faCar, faDog, faEnvelope, faEye, faMap, faMapMarkerAlt, faMaximize } from "@fortawesome/free-solid-svg-icons";
import { PropertyID } from "./PropertyID";
import { Divider } from "components/Divider";
import { useState } from "react";
import { FeaturesList } from "./FeaturesList";
import { CallToActionButton } from "components/CallToActionButton";
import { Map } from "components/Map";
import { mapListingType } from "utils/mapListingType";
import { propertyConditions } from "propertyConditions";


const PropertyLayout = ({
    children, 
    title, 
    blocks, 
    author, 
    featuredImage, 
    propertyFeatures, 
    categories, 
    features,
    propertyLocation,
    propertyCity,
    propertyState,
    propertyCountry,
    callToActionDestination,
    callToActionLabel
}) => {
    
    const contentType = useContentType();
    const {
        bathrooms, 
        bedrooms, 
        code,
        condition,
        currency, 
        deliveryDate,
        floor,
        hasParking, 
        listingType,
        parkingQty, 
        petFriendly, 
        price, 
        squareFeet,
        status,
        yearBuilt,
        propertyLocationMap,
        zipCode
    } = propertyFeatures;

    const serializedCurrency = mapCurrencyCode(currency);
    const formattedListingType = mapListingType(listingType);

    console.log("PROPERTY LAYOUT CHILDREN: ", children);

    return (
        <Layout title={`${contentType} Layout`}>
            <section className={`property ${contentType}-layout lg:px-8 space-y-2 lg:py-10 overflow-hidden`}>
                <Cover background={featuredImage}>
                    <Heading level="2" content={title} textAlign="center" className="hidden lg:block mx-auto" />
                    <PropertyFeatures 
                        price={price} 
                        bedrooms={bedrooms} 
                        bathrooms={bathrooms} 
                        hasParking={hasParking} 
                        petFriendly={petFriendly} 
                        callToActionLabel={callToActionLabel} 
                        callToActionDestination={callToActionDestination} 
                        propertyLocation={propertyLocation} 
                        propertyCity={propertyCity}
                        propertyState={propertyState}
                        propertyCountry={propertyCountry}
                        zipCode={zipCode}
                        currency={currency}
                        listingType={listingType}
                        categories={categories}
                    />
                </Cover>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 lg:px-0 py-10 max-w-full text-slate-600">
                    <div className="col-span-1 lg:col-span-2">
                        <div>
                            {categories.map((category, i) => (
                                <Badge className="bg-yellow-300 rounded-sm text-base py-2" key={i}>{category?.name}</Badge>
                            ))}
                            <Heading level="3" content={title} className="text-slate-700 font-medium" />
                        </div>
                        <span className="text-sm">Precio desde</span>
                        <div className="flex items-center gap-2 mb-5">
                            {currency && (<span className="text-sm mr-1 text-yellow-600">{serializedCurrency}</span>)}
                            {price && (<h3 className="text-yellow-600 text-3xl font-medium">${numeral(price).format('0,0')}</h3>)}
                            <Badge className="-mt-2 bg-blue-400 text-slate-800">{formattedListingType}</Badge>
                        </div>
                        
                        <div className="flex items-center flex-wrap my-3 text-base gap-4">
                            {bedrooms && (
                                <Badge className="rounded-sm py-2 lg:py-3 inline-block items-center gap-2">
                                    <FontAwesomeIcon icon={faBed} size="lg" />{bedrooms} <span>Habitaciones</span>
                                </Badge>
                            )}
                            {bathrooms && (
                                <Badge className="rounded-sm py-2 lg:py-3 inline-block items-center gap-2">
                                    <FontAwesomeIcon icon={faBath} size="lg" />{bathrooms} <span>Baños</span>
                                </Badge>
                            )}
                            {hasParking && (
                                <Badge className="rounded-sm py-2 lg:py-3 inline-block items-center gap-2">
                                    <FontAwesomeIcon icon={faCar} size="lg" />{parkingQty ? parkingQty : null} <span>Parqueos</span>
                                </Badge>
                            )}
                            {petFriendly && (
                                <Badge className="rounded-sm py-2 lg:py-3 inline-block items-center gap-2">
                                    <FontAwesomeIcon icon={faDog} size="lg" /><span>Pet Friendly</span>
                                </Badge>
                            )}
                            {squareFeet && (
                                <Badge className="rounded-sm py-2 lg:py-3 inline-block items-center gap-2">
                                    <FontAwesomeIcon icon={faArrowsLeftRightToLine} size="lg" />{squareFeet} <span>m<sup>2</sup></span>
                                </Badge>
                            )}
                        </div>
                        <section className="call-to-action py-5 text-left">
                            {callToActionDestination && (
                                <CallToActionButton destination={callToActionDestination} align="left" className="btn btn-primary py-4 space-x-2 shadow-lg">
                                    <FontAwesomeIcon icon={faEnvelope} size="lg" /><span>Agenda una visita</span>
                                </CallToActionButton>
                            )}
                        </section>
                        <div className="block lg:flex items-center gap-2 lg:divide-x">
                            {condition && (
                                <span>
                                    {(propertyConditions || []).map(propertyCondition => (
                                        propertyCondition.value === parseInt(condition) 
                                        ? (<span>Condición: <strong>{propertyCondition.label}</strong></span>)
                                        : null
                                    ))}
                                </span>
                            )}
                            {deliveryDate && (
                                <span className={`flex items-center ${condition ? 'lg:pl-2' : null}`}>
                                    {deliveryDate && (<span>Fecha de entrega: <strong>{deliveryDate}</strong></span>)}
                                </span>
                            )}
                        </div>
                        <Divider />
                        {propertyLocation?.length > 0 && (
                            <div className="flex items-start gap-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center justify-start space-x-0 gap-1 lg:space-x-1">
                                        {propertyLocation.length > 0 && (<span>{propertyLocation[0].name},</span>)}
                                        {propertyCity.length > 0 && (<span>{propertyCity[0].name}.</span>)}
                                    </div>
                                    <div className="flex items-center space-x-0 gap-1 lg:space-x-1">
                                        {propertyState.length > 0 && (<span>{propertyState[0].name},</span>)}
                                        {propertyCountry.length > 0 && (<span>{propertyCountry[0].name}</span>)}
                                    </div>
                                    {propertyFeatures.zipCode && (
                                        <div>
                                            {propertyFeatures.zipCode}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        
                        {features.length > 0 && (<FeaturesList features={features} />)}
                        <div className="my-10">
                        {children}
                        </div>

                        <Map content={propertyFeatures.propertyLocationMap} />
                        
                            

                        
                    </div>
                    <div className="col-span-1 space-y-4">
                        {code && (<PropertyID><span className="flex items-center gap-x-4">ID de la Propiedad: <span className="flex flex-1 p-2 text-xl justify-center bg-yellow-300 bg-opacity-20 text-yellow-500">{code}</span></span></PropertyID>)}
                        <AgentCard user={author} />
                    </div>
                </div>
                
            </section>
        </Layout>
    )
}

export default PropertyLayout;