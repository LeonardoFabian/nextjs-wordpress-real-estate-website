import { PropertyCard } from "./PropertyCard";
import { Sidebar } from "components/Sidebar";

export const Results = ({properties}) => {
    return (
        <>
        {/* <Sidebar /> */}
        {/* <div className="max-w-full mx-auto block md:grid lg:grid-cols-3 xl:grid-cols-4 gap-x-4 mb-10"> */}
      
            {properties.map(property => (
                <PropertyCard 
                    key={property.databaseId} 
                    title={property.title}
                    destination={property.uri}
                    bedrooms={property.propertyFeatures.bedrooms}
                    bathrooms={property.propertyFeatures.bathrooms}
                    price={property.propertyFeatures.price}
                    hasParking={property.propertyFeatures.hasParking}
                    petFriendly={property.propertyFeatures.petFriendly}
                    image={property.featuredImage?.node.sourceUrl}
                />
            ))}
       
        {/* </div> */}
        </>
    );
};