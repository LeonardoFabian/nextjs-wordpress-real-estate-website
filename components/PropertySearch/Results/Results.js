import { mapLocations } from "utils/mapLocations";
// import { PropertyCard } from "./PropertyCard";
import { PropertyCard } from "components/PropertiesList/Properties/PropertyCard";
import { Sidebar } from "components/Sidebar";
import { mapCategories } from "utils/mapCategories";
import { mapPropertyLocation } from "utils/mapPropertyLocation";

export const Results = ({properties}) => {
    return (
        <>
        {/* <Sidebar /> */}
        {/* <div className="max-w-full mx-auto block md:grid lg:grid-cols-3 xl:grid-cols-4 gap-x-4 mb-10"> */}
      
            {(properties || []).map(property => {
                const locations = mapLocations(property?.locations?.nodes);
                const cities = mapPropertyLocation(property?.cities?.nodes);
                const categories = mapCategories(property?.categories?.nodes);

                {/* console.log("LOCATION: ", location); */}
                {/* console.log("CITY: ", city); */}

                return (
                    <PropertyCard 
                        key={property?.databaseId} 
                        code={property?.propertyFeatures?.code}
                        date={property?.dateGmt}
                        title={property?.title}
                        destination={property?.uri}
                        bedrooms={property?.propertyFeatures?.bedrooms}
                        bathrooms={property?.propertyFeatures?.bathrooms}
                        price={property?.propertyFeatures?.price}
                        currency={property?.propertyFeatures?.currency}
                        hasParking={property?.propertyFeatures?.hasParking}
                        parkingQty={property?.propertyFeatures?.parkingQty}
                        petFriendly={property?.propertyFeatures?.petFriendly}
                        image={property?.featuredImage?.node?.sourceUrl}
                        location={locations[0]}
                        city={cities[0]}
                        category={categories[0]}
                    />
                )
            })}
       
        {/* </div> */}
        </>
    );
};