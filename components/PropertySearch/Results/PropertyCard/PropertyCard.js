import { faBathtub, faBed, faCar, faDog, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BadgeLink } from "components/BadgeLink"
import { DateRelativeTime } from "components/DateRelativeTime"
import { PostDate } from "components/Layouts/PostLayout/PostDate"
import Image from "next/image"
import Link from "next/link"
import numeral from "numeral"
import { mapCurrencyCode } from "utils/currency"

export const PropertyCard = ({title, date, destination, bedrooms, bathrooms, hasParking, parkingQty, petFriendly, currency, price, image, location, city, category}) => {
    
    const formattedCurrency = mapCurrencyCode(currency);

    // console.log("PROPERTY CARD LOCATION: ", location);

    
    return (
        <Link href={destination} prefetch={false} className="block w-full py-6 relative">
            {category && (
                <BadgeLink uri={category.uri}>{category.name}</BadgeLink>
            )}
            <div className="flex flex-col bg-white h-full overflow-hidden shadow-xl rounded-lg">
                <Image 
                    src={image} 
                    alt="" 
                    height="256" 
                    width="320" 
                    className="w-full object-cover" 
                    placeholder="blur"
                    blurDataURL={image}
                />

                <div className="p-4 mb-auto">
                    <p className="tracking-wide text-xs text-gray-400 flex items-center space-x-4">
                        {category 
                        ? (<span className="uppercase text-yellow-600">{category ? category.name : null}</span>)
                        : null
                        }
                        <DateRelativeTime dateTime={date} />
                    </p>
                    <p className="text-3xl text-gray-900 font-semibold">
                        <span className="text-sm mr-1">{formattedCurrency}</span>
                        {numeral(price).format("0,0")}
                    </p>
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
    )
}