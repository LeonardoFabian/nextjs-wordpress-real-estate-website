import { faBed, faCar, faDog, faShower, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CallToActionButton } from "components/CallToActionButton"
import { Heading } from "components/Heading"
import numeral from "numeral"
import { mapCurrencyCode } from "utils/currency"
import { mapListingType } from "utils/mapListingType"
import { Badge } from "components/Badge"

export const PropertyFeatures = ({price, bedrooms, bathrooms, hasParking, petFriendly, callToActionLabel, callToActionDestination, propertyLocation, propertyCity, propertyState, propertyCountry, zipCode, currency, listingType, categories}) => {
    
    const serializedCurrency = mapCurrencyCode(currency);
    const formattedListingType = mapListingType(listingType);
    
    return (
        <div className="max-w-5xl mx-auto my-auto">
            <div className="max-w-xl mx-auto text-slate-800">                
                <div className="grid grid-cols-2 md:grid-cols-5 mb-4 items-stretch h-52 min-h-52">
                    <div className="col-span-2 md:col-span-3 bg-yellow-500 p-4 h-full shadow">
                        <div className="flex flex-col justify-between h-52 lg:h-full min-h-52">
                            <div>
                                <div className="flex items-center gap-2">
                                    {currency && (<span className="text-sm mr-1">{serializedCurrency}</span>)}
                                    <h3 className="text-3xl font-semibold">${numeral(price).format('0,0')}</h3>
                                    {/* <Badge className="-mt-2 bg-yellow-100 !bg-opacity-90 text-slate-800">{formattedListingType}</Badge> */}
                                </div>   
                            
                                {categories && (categories.map(category => (
                                    <p className="uppercase text-slate-800" key={category.id}>{category.name} en {formattedListingType}</p>
                                )))}
                                                          
                                {propertyLocation?.length > 0 && (
                                    <div className="flex items-start gap-3 text-xs my-4">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-1">
                                                {propertyLocation.length > 0 && (<span>{propertyLocation[0].name},</span>)}
                                                {propertyCity.length > 0 && (<span>{propertyCity[0].name}.</span>)}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {propertyState.length > 0 && (<span>{propertyState[0].name},</span>)}
                                                {propertyCountry.length > 0 && (<span>{propertyCountry[0].name}</span>)}
                                            </div>
                                            {zipCode && (
                                                <div>
                                                    {zipCode}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            {callToActionDestination && (
                                <div>
                                    <CallToActionButton destination={callToActionDestination} label="Schedule a showing" className="bg-white text-slate-800 py-4 lg:py-2 shadow-lg shadow-yellow-600">
                                        {callToActionLabel}
                                    </CallToActionButton>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-2 h-60 lg:h-full text-sm text-white">
                            <div className="flex flex-col gap-2 items-center justify-center text-center uppercase h-full w-full bg-slate-900 bg-opacity-80 border border-slate-800">
                                <span><FontAwesomeIcon icon={faBed} size="2x" /></span>
                                <span className="text-xs">{bedrooms} bedrooms</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-center text-center uppercase h-full w-full bg-slate-900 bg-opacity-80 border border-slate-800">
                                <span><FontAwesomeIcon icon={faShower} size="2x" /></span> 
                                <span className="text-xs">{bathrooms} bathrooms</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-center text-center uppercase h-full w-full bg-slate-900 bg-opacity-80 border border-slate-800">
                                <span><FontAwesomeIcon icon={faCar} size="2x" className={`${!hasParking && 'opacity-10'}`} /></span> 
                                {!!hasParking && (<span className="text-xs">has parking</span>) }
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-center text-center uppercase h-full w-full bg-slate-900 bg-opacity-80 border border-slate-800">
                                <span><FontAwesomeIcon icon={faDog} size="2x" className={`${!petFriendly && 'opacity-10'}`} /></span> 
                                {!!petFriendly && (<span className="text-xs">pet friendly</span>) }
                            </div>
                        </div>
                    </div>
                    
                
                </div>
            </div>
        </div>
    )
}