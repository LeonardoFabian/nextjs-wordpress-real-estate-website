import { PropertyCard } from "./PropertyCard";
import { mapLocations } from "utils/mapLocations";
import { mapCategories } from "utils/mapCategories";
import { mapPropertyLocation } from "utils/mapPropertyLocation";

export const Properties = ({properties}) => {

    // console.log("PROPERTIES: ", properties);    

    return (properties || []).map((property, i) => {

        const locations = mapLocations(property?.node?.locations?.edges);
        const cities = mapPropertyLocation(property?.node?.cities?.edges);
        const states = mapPropertyLocation(property?.node?.states?.edges);
        const countries = mapPropertyLocation(property?.node?.countries?.edges);

        {/* if(!property) {
            return (<h1 key="0" className="text-slate-900 text-5xl">Loading...</h1>)
        } */}

        return (                        
            <PropertyCard 
                key={i}
                categories={property?.node?.categories?.edges}
                city={cities[0]}
                state={states[0]}
                country={countries[0]}
                date={property?.node?.date} 
                image={property?.node?.featuredImage?.node?.sourceUrl}
                location={locations[0]}
                bathrooms={property?.node?.propertyFeatures?.bathrooms}
                bedrooms={property?.node?.propertyFeatures?.bedrooms}
                code={property?.node?.propertyFeatures?.code}
                condition={property?.node?.propertyFeatures?.condition}
                currency={property?.node?.propertyFeatures?.currency}
                deliveryDate={property?.node?.propertyFeatures?.deliveryDate}
                floor={property?.node?.propertyFeatures?.floor}
                hasParking={property?.node?.propertyFeatures?.hasParking}
                listingType={property?.node?.propertyFeatures?.listingType}
                parkingQty={property?.node?.propertyFeatures?.parkingQty}
                petFriendly={property?.node?.propertyFeatures?.petFriendly}
                price={property?.node?.propertyFeatures?.price}
                squareFeet={property?.node?.propertyFeatures?.squareFeet}
                status={property?.node?.propertyFeatures?.status}
                yearBuilt={property?.node?.propertyFeatures?.yearBuilt}
                zipCode={property?.node?.propertyFeatures?.zipCode}
                title={property?.node?.title}
                destination={property?.node?.uri}
            />                        
        );
    })
}