import { faBathtub, faBed, faCar, faDog, faHouse, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Badge } from "components/Badge"
import { BadgeLink } from "components/BadgeLink"
import { DateRelativeTime } from "components/DateRelativeTime"
import { PostDate } from "components/Layouts/PostLayout/PostDate"
import Image from "next/image"
import Link from "next/link"
import numeral from "numeral"
import { mapCurrencyCode } from "utils/currency"
import { mapListingType } from "utils/mapListingType"

export const PropertyCard = ({state, country, title, code, condition, date, destination, listingType, bedrooms, bathrooms, hasParking, parkingQty, petFriendly, currency, deliveryDate, floor, price, squareFeet, status, yearBuilt, zipCode, image, location, city, categories}) => {
    
    const formattedCurrency = mapCurrencyCode(currency);
    const formattedListingType = mapListingType(listingType);

    // console.log("PROPERTY CARD LOCATION: ", location);
    if(status === "1") {
        return (        
            <>
                <Link href={destination} prefetch={false} className="block w-full py-6 relative">                   
                    <div className="flex flex-col bg-white h-full overflow-hidden shadow hover:shadow-xl rounded-lg">
                        <div className="relative">                    
                            <Image 
                            src={image} 
                            alt="" 
                            height="256" 
                            width="320" 
                            className="w-full object-cover" 
                            placeholder="blur"
                            blurDataURL={image}
                        />
                        {
                            categories.map(category => (
                                    <BadgeLink key={category.node.id} uri={category?.node.uri} className="absolute -bottom-3 bg-yellow-500 bg-opacity-90 text-sm uppercase">
                                        {(category?.node.name && typeof category?.node.name !== "undefined") ? category.node.name : "Sin Categoría" }
                                    </BadgeLink>
                                )
                            )              
                        }
                        </div>
    
                        <div className="p-4 mb-auto">
                            <div className="tracking-wide text-xs text-gray-400 flex items-center space-x-4 py-2">
                                {code 
                                ? (<span className="uppercase text-yellow-600"><FontAwesomeIcon icon={faHouse}/> [{code}]</span>)
                                : null
                                }
                                <DateRelativeTime dateTime={date} />
                            </div>
                            <div className="text-3xl text-gray-900 font-semibold inline-flex items-center space-x-2">
                                <span className="text-sm mr-1">{formattedCurrency}</span>
                                {numeral(price).format("0,0")}
                                {formattedListingType !== "undefined" && (
                                    <Badge className="-mt-2 bg-blue-400 text-slate-800">
                                        {formattedListingType}
                                    </Badge>
                                )}                                
                            </div>
                            <p className="text-gray-700">{title}</p>
                            {location || location ? (
                                <div className="flex items-start justify-start space-x-2 mt-3 text-xs">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-700" size="lg"/>
                                    <span className="text-gray-900">{location ? location.name : null}, {city ? city.name : null}</span>
                                </div>
                            ) : null}                        
                        </div>
                        <div className="mt-auto">
                            <div className="flex justify-between text-sm p-4 border-t border-gray-300 text-gray-700">
                                <div className="inline-block space-x-2">
                                    <FontAwesomeIcon icon={faBed} />
                                    <span className="text-gray-900">{bedrooms} Bedrooms</span>
                                </div>
                                <div className="inline-block space-x-2">
                                    <FontAwesomeIcon icon={faBathtub} />
                                    <span className="text-gray-900">{bathrooms} Bathrooms</span> 
                                </div>
                            </div>
    
                            {(!!hasParking || !!petFriendly) && (
                                <div className="flex justify-between text-sm p-4 border-t border-gray-300 text-gray-700">
                                    <div className="inline-block space-x-2">
                                        {!!hasParking && (
                                            <>
                                            <FontAwesomeIcon icon={faCar} />
                                            <span className="text-gray-900">{parkingQty} Parking</span>
                                            </>
                                        )}                        
                                    </div>
                                    <div className="inline-block space-x-2">
                                        {!!petFriendly && (
                                            <>
                                                <FontAwesomeIcon icon={faDog} />
                                                <span className="text-gray-900">Pet friendly</span>
                                            </>
                                        )}                        
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Link>
            </>
        )
    } else {
        return (        
            <>
                <div className="block w-full py-6 relative">                   
                    <div className="flex flex-col bg-white h-full overflow-hidden shadow rounded-lg">
                        <div className="relative grayscale">                    
                            <Image 
                            src={image} 
                            alt="" 
                            height="256" 
                            width="320" 
                            className="w-full object-cover" 
                            placeholder="blur"
                            blurDataURL={image}
                        />
                        {
                            categories.map(category => (
                                    <BadgeLink key={category.node.id} uri={category?.node.uri} className="absolute -bottom-3 cursor-default bg-yellow-500 bg-opacity-90 text-sm uppercase">{category?.node.name}</BadgeLink>
                                )
                            )              
                        }
                        </div>
    
                        <div className="p-4 mb-auto">
                            <div className="tracking-wide text-xs text-gray-400 flex items-center space-x-4 py-2">
                                {code 
                                ? (<span className="uppercase text-yellow-600"><FontAwesomeIcon icon={faHouse}/> [{code}]</span>)
                                : null
                                }
                                <DateRelativeTime dateTime={date} />
                            </div>
                            <div className="text-3xl text-gray-400 font-semibold inline-flex items-center space-x-2">
                                <span className="text-sm mr-1">{formattedCurrency}</span>
                                {numeral(price).format("0,0")}
                                <Badge className="-mt-2 bg-gray-400 text-slate-400">{formattedListingType}</Badge>
                            </div>
                            <p className="text-gray-400">{title}</p>
                            {location || location ? (
                                <div className="flex items-start justify-start space-x-2 mt-3 text-xs">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-700" size="lg"/>
                                    <span className="text-gray-900">{location ? location.name : null}, {city ? city.name : null}</span>
                                </div>
                            ) : null}                        
                        </div>
                        <div className="mt-auto">
                            <div className="flex justify-between text-sm p-4 border-t border-gray-300 text-gray-400">
                                <div className="inline-block space-x-2">
                                    <FontAwesomeIcon icon={faBed} />
                                    <span className="text-gray-400">{bedrooms} Bedrooms</span>
                                </div>
                                <div className="inline-block space-x-2">
                                    <FontAwesomeIcon icon={faBathtub} />
                                    <span className="text-gray-400">{bathrooms} Bathrooms</span> 
                                </div>
                            </div>
    
                            {(!!hasParking || !!petFriendly) && (
                                <div className="flex justify-between text-sm p-4 border-t border-gray-300 text-gray-400">
                                    <div className="inline-block space-x-2">
                                        {!!hasParking && (
                                            <>
                                            <FontAwesomeIcon icon={faCar} />
                                            <span className="text-gray-400">{parkingQty} Parking</span>
                                            </>
                                        )}                        
                                    </div>
                                    <div className="inline-block space-x-2">
                                        {!!petFriendly && (
                                            <>
                                                <FontAwesomeIcon icon={faDog} />
                                                <span className="text-gray-400">Pet friendly</span>
                                            </>
                                        )}                        
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
}