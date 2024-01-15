import { faBathtub, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import numeral from "numeral"

export const PropertyCard = ({title, destination, bedrooms, bathrooms, hasParking, petFriendly, price, image}) => {
    return (
        <a href={destination}>
            <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="flex w-full h-[200px] relative">
                        <Image 
                            src={image} 
                            alt="" 
                            fill 
                            sizes="300"
                            className="object-cover"
                        />
                    </div>
                    {/* <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${image})` }}>
                        <div className="flex justify-end">
                            <svg className="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                            </svg>
                        </div>
                    </div> */}
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

                    {/* <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                        <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Realtor</div>
                        <div className="flex items-center pt-2">
                            <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3" style={{ backgroundImage: "url(https://via.placeholder.com/50x50)" }}>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Catherine Heffner</p>
                                <p className="text-sm text-gray-700">(111) 111-1111</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </a>
    )
}