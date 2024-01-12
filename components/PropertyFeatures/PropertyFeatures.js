import { faBed, faCar, faDog, faShower } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CallToActionButton } from "components/CallToActionButton"
import { Heading } from "components/Heading"
import numeral from "numeral"

export const PropertyFeatures = ({price, bedrooms, bathrooms, hasParking, petFriendly}) => {
    return (
        <div className="max-w-5xl mx-auto my-10">
            <div className="max-w-xl mx-auto text-white">                
                <div className="grid grid-cols-2 md:grid-cols-5 mb-4">
                    <div className="col-span-2 md:col-span-3 bg-blue-500 p-4 h-full">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-3xl font-semibold">${numeral(price).format('0,0')}</h3>
                                <span className="text-xs">31885 Circle Drive Laguna Beach, CA 92651</span>
                            </div>
                            <div>
                                <CallToActionButton destination="/" label="Schedule a showing" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-2 text-sm">
                            <div className="flex flex-col gap-2 items-center justify-center text-center uppercase h-24 w-full md:w-28 bg-slate-900 bg-opacity-80 border border-slate-800">
                                <span><FontAwesomeIcon icon={faBed} size="2x" /></span>
                                <span className="text-xs">{bedrooms} bedrooms</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-center text-center uppercase h-24 w-full md:w-28 bg-slate-900 bg-opacity-80 border border-slate-800">
                                <span><FontAwesomeIcon icon={faShower} size="2x" /></span> 
                                <span className="text-xs">{bathrooms} bathrooms</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-center text-center uppercase h-24 w-full md:w-28 bg-slate-900 bg-opacity-80 border border-slate-800">
                                <span><FontAwesomeIcon icon={faCar} size="2x" className={`${!hasParking && 'opacity-10'}`} /></span> 
                                {!!hasParking && (<span className="text-xs">has parking</span>) }
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-center text-center uppercase h-24 w-full md:w-28 bg-slate-900 bg-opacity-80 border border-slate-800">
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