import { faBathtub, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import numeral from "numeral"

export const PropertyCard = ({title, destination, bedrooms, bathrooms, hasParking, petFriendly, price, image}) => {
    return (
        <Link href={destination} prefetch={false}>
            <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <Image 
                        src={image} 
                        alt="" 
                        height="256" 
                        width="320" 
                        className="object-cover" 
                        placeholder="blur"
                        blurDataURL={image}
                    />
                    <div className="p-4">
                        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">Detached house • 5y old</p>
                        <p className="text-3xl text-gray-900">${numeral(price).format("0,0")}</p>
                        <p className="text-gray-700">{title}</p>
                    </div>
                    <div className="flex justify-between text-sm p-4 border-t border-gray-300 text-gray-700">
                        <div className="flex-1 inline-flex items-center">
                            <FontAwesomeIcon icon={faBed} />
                            <p className="pl-2"><span className="text-gray-900 font-bold">{bedrooms}</span> Bedrooms</p>
                        </div>
                        <div className="flex-1 inline-flex items-center">
                            <FontAwesomeIcon icon={faBathtub} />
                            <p className="pl-2"><span className="text-gray-900 font-bold">{bathrooms}</span> Bathrooms</p>
                        </div>
                    </div>

                    {(!!hasParking || !!petFriendly) && (
                        <div className="flex justify-between text-sm p-4 border-t border-gray-300 text-gray-700">
                            <div className="flex-1 inline-flex items-center">
                                {!!hasParking && (
                                    <>
                                    <FontAwesomeIcon icon={faCar} />
                                    <p className="pl-2"><span className="text-gray-900 font-bold"></span> Parking</p>
                                    </>
                                )}                        
                            </div>
                            <div className="flex-1 inline-flex items-center">
                                {!!petFriendly && (
                                    <>
                                        <FontAwesomeIcon icon={faDog} />
                                        <p className="pl-2"><span className="text-gray-900 font-bold"></span> Pet friendly</p>
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