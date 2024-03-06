import { PropertyCard } from "components/PropertySearch/Results/PropertyCard";
import { useEffect, useState } from "react"
import { mapCategories } from "utils/mapCategories";
import { mapLocations } from "utils/mapLocations";
import { Properties } from "./Properties/Properties";
import { Pagination } from "components/Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";
import { PropertyFilters } from "components/PropertyFilters";
import { Heading } from "components/Heading";
// import { Spinner } from "@nextui-org/react";

export const PropertiesList = ({propertyFeatures}) => {

    // console.log("PROPERTY LIST- PROPERTY FEATURES: ", propertyFeatures);

    const [properties, setProperties] = useState([]);
    const [categories, setCategories] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const pageSize = 12;
    const router = useRouter();

    // const getAllCategories = async () => {
    //     const {}
    // }

    const getAllProperties = async () => {

        // return http://localhost:3000/buying/properties?page=1
        const {page, code, floor, condition, listingType, categoryId, bedrooms, bathrooms, parkingQty, petFriendly, status, hasParking, currency, minPrice, maxPrice, zipCode} = queryString.parse(window.location.search);

        const propertiesFilters = {};

        // int minPrice
        if(minPrice) {
            propertiesFilters.minPrice = parseInt(minPrice);
        }

        // int maxPrice
        if(maxPrice) {
            propertiesFilters.maxPrice = parseInt(maxPrice);
        }

        // currency
        if(currency) {
            propertiesFilters.currency = currency;
        }

        // boolean hasParking
        if(hasParking === "true") {
            propertiesFilters.hasParking = true;
        }

        // boolean petFriendly
        if(petFriendly === "true") {
            propertiesFilters.petFriendly = true;
        }

        if(status) {
            propertiesFilters.status = status;
        }

        // parkingQty
        if(parkingQty) {
            propertiesFilters.parkingQty = parseInt(parkingQty);
        }

        // bathrooms
        if(bathrooms) {
            propertiesFilters.bathrooms = parseInt(bathrooms);
        }

        // bedrooms
        if(bedrooms) {
            propertiesFilters.bedrooms = parseInt(bedrooms);
        }

        // code
        if(code) {
            propertiesFilters.code = code;
        }

        // floor
        if(floor) {
            propertiesFilters.floor = parseInt(floor);
        }

        // listing type
        if(listingType) {
            propertiesFilters.listingType = listingType;
        }

        if(condition) {
            propertiesFilters.condition = condition;
        }

        if(zipCode) {
            propertiesFilters.zipCode = zipCode;
        }

        // category
        if(categoryId) {
            propertiesFilters.categoryId = categoryId;
        }

        const reqOptions = {
            method: "POST",
            body: JSON.stringify({
                page: parseInt(page || "1"),
                ...propertiesFilters,
            }),
        }

        const response = await fetch(`/api/search`, reqOptions);
        const data = await response.json();
        // console.log("PROPERTIES LIST FETCH DATA: ", data);

        setProperties(data.properties);
        setCategories(data.categories);
        setTotalResults(data.total);
    }

    const handlerPageClick = async (pageNumber) => {
        const {
            code, 
            floor, 
            condition,
            listingType, 
            categoryId, 
            bedrooms, 
            bathrooms, 
            parkingQty, 
            petFriendly,
            status,
            hasParking, 
            currency, 
            minPrice, 
            maxPrice,
            zipCode
        } = queryString.parse(window.location.search);

        await router.push(
            `${router.query.uri.join("/")}?page=${pageNumber}&code=${code}&floor=${floor}&condition=${condition}&listingType=${listingType}&categoryId=${categoryId}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&parkingQty=${parkingQty}&petFriendly=${petFriendly === "true"}&status=${status}&hasParking=${hasParking === "true"}&currency=${currency}&minPrice=${minPrice}&maxPrice=${maxPrice}&zipCode=${zipCode}`, 
            // `${router.query.slug.join("/")}?page=${pageNumber}&code=${code}&floor=${floor}&condition=${condition}&listingType=${listingType}&categoryId=${categoryId}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&parkingQty=${parkingQty}&petFriendly=${petFriendly === "true"}&status=${status}&hasParking=${hasParking === "true"}&currency=${currency}&minPrice=${minPrice}&maxPrice=${maxPrice}&zipCode=${zipCode}`, 
            null, 
            {
                shallow: true
            }
        );
        getAllProperties();
    };

    useEffect(() => {        
        getAllProperties();
    }, []);

    const handleSearch = async ({
        code, 
        floor, 
        condition,
        listingType, 
        categoryId, 
        bedrooms, 
        bathrooms, 
        parkingQty, 
        petFriendly, 
        status,
        hasParking, 
        currency,
        minPrice, 
        maxPrice,
        zipCode
    }) => {
        // update browser url
        // search
        console.log("PROPERTY HANDLE SEARCH: ", code, floor, condition, listingType, categoryId, bedrooms, bathrooms, parkingQty, petFriendly, status, hasParking, currency, minPrice, maxPrice, zipCode);
       
        await router.push(
            `${router.query.uri.join("/")}?page=1&code=${code}&floor=${floor}&condition=${condition}&listingType=${listingType}&categoryId=${categoryId}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&parkingQty=${parkingQty}&petFriendly=${!!petFriendly}&status=${status}&hasParking=${!!hasParking}&currency=${currency}&minPrice=${minPrice}&maxPrice=${maxPrice}&zipCode=${zipCode}`, 
            // `${router.query.slug.join("/")}?page=1&code=${code}&floor=${floor}&condition=${condition}&listingType=${listingType}&categoryId=${categoryId}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&parkingQty=${parkingQty}&petFriendly=${!!petFriendly}&status=${status}&hasParking=${!!hasParking}&currency=${currency}&minPrice=${minPrice}&maxPrice=${maxPrice}&zipCode=${zipCode}`, 
            null, 
            {
                shallow: true
            }
        );
        getAllProperties();
    }

    return (
        <div className="component-properties-list py-5 max-w-full mx-auto text-gray-800 relative">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-4">
                <div className="col-span-1">
                    <PropertyFilters onSearch={handleSearch} categories={categories} />
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <header className="flex flex-col py-2 px-4">
                        <Heading level="5" content="Propiedades" textAlign="left" className="font-semibold" />   
                        <div className="flex items-center justify-between">
                            <span className="text-xs">{totalResults} Inmuebles encontrados</span>
                            <span className="text-xs">Ordenar por Más Recientes</span>
                        </div>
                    </header>
                    <div className="properties-list col-span-1 lg:col-span-3">
                        <div className="px-4 grid grid-flow-row grid-cols-1 md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 items-stretch gap-x-10 lg:gap-x-8 2xl:gap-x-6 gap-y-4">
                            <Properties properties={properties} />
                        </div>
                        <Pagination 
                            totalPages={Math.ceil(totalResults / pageSize)}
                            onPageClick={handlerPageClick}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    );
};