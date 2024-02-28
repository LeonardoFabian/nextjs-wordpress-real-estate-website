import { useEffect, useState } from "react"
import { Results } from "./Results";
import { Pagination } from "components/Pagination";
import { useRouter } from "next/router";
import queryString from 'query-string';
import { Filters } from "./Filters";
import { Sidebar } from "components/Sidebar";

export const PropertySearch = () => {

    // const [properties, setProperties] = useState([]);
    // const [totalResults, setTotalResults] = useState(0);
    // const pageSize = 12;
    const [categories, setCategories] = useState([]);
    const router = useRouter();

    const search = async () => {
        const {page, code, floor, condition, listingType, categoryId, bedrooms, bathrooms, parkingQty, petFriendly, status, hasParking, currency, minPrice, maxPrice, zipCode} = queryString.parse(window.location.search);

        const filters = {};

        if(minPrice) {
            filters.minPrice = parseInt(minPrice);
        }

        if(maxPrice) {
            filters.maxPrice = parseInt(maxPrice);
        }

        // currency
        if(currency) {
            filters.currency = currency;
        }

        if(hasParking === "true") {
            filters.hasParking = true;
        }

        if(petFriendly === "true") {
            filters.petFriendly = true;
        }

        
        if(status) {
            filters.status = status;
        }

        // parkingQty
        if(parkingQty) {
            filters.parkingQty = parseInt(parkingQty);
        }

        // bathrooms
        if(bathrooms) {
            filters.bathrooms = parseInt(bathrooms);
        }

        // bedrooms
        if(bedrooms) {
            filters.bedrooms = parseInt(bedrooms);
        }

        // code
        if(code) {
            filters.code = code;
        }

        // floor
        if(floor) {
            filters.floor = parseInt(floor);
        }

        if(listingType) {
            filters.listingType = listingType;
        }

        
        if(condition) {
            filters.condition = condition;
        }

        if(zipCode) {
            filters.zipCode = zipCode;
        }

        if(categoryId) {
            filters.categoryId = categoryId;
        }

        const response = await fetch(`/api/search`, {
            method: "POST",
            body: JSON.stringify({
                page: parseInt(page || "1"),
                ...filters,
            }),
        });
        const data = await response.json();
        console.log("PROPERTY SEARCH FETCH DATA: ", data);

        setCategories(data.categories);

        // setProperties(data.properties);
        // setTotalResults(data.total);
    };

    // const handlerPageClick = async (pageNumber) => {
    //     const {
    //         petFriendly, 
    //         hasParking,
    //         minPrice,
    //         maxPrice
    //     } = queryString.parse(window.location.search);

    //     await router.push(
    //         `${router.query.slug.join("/")}?page=${pageNumber}&petFriendly=${petFriendly === "true"}&hasParking=${hasParking === "true"}&minPrice=${minPrice}&maxPrice=${maxPrice}`, 
    //         null, 
    //         {
    //             shallow: true,
    //         }
    //     );
    //     search();
    // };

    useEffect(() => {        
        search();
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
        // update our browser url
        // search
        console.log("ROUTER: ", router);
        console.log("FILTERS: ", petFriendly, hasParking, minPrice, maxPrice, listingType, categoryId);

        if(router.query.uri) {
            await router.push(
                `${router.query.uri.join("/")}?page=1&code=${code}&floor=${floor}&condition=${condition}&listingType=${listingType}&categoryId=${categoryId}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&parkingQty=${parkingQty}&petFriendly=${!!petFriendly}&status=${status}&hasParking=${!!hasParking}&currency=${currency}&minPrice=${minPrice}&maxPrice=${maxPrice}&zipCode=${zipCode}`, 
                null, 
                {
                    shallow: true,
                }
            );
        } else {
            await router.push(
                `/buying/properties?page=1&petFriendly=${!!petFriendly}&hasParking=${!!hasParking}&minPrice=${minPrice}&maxPrice=${maxPrice}&listingType=${listingType}&categoryId=${categoryId}`,
                null, 
                {
                    shallow: true,
                }
            );
        }
        search();
    }

    return (       
        <div className="px-4 py-5 max-w-full mx-auto text-gray-800 relative">
            <Filters onSearch={handleSearch} categories={categories} />
            {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4">
                <div className="col-span-1">
                    <Sidebar />
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-stretch gap-x-10 lg:gap-x-8 2xl:gap-x-6 gap-y-4">
                        <Results properties={properties} />                        
                    </div>
                    <div className="col-span-1 lg:col-span-3">
                            <Pagination 
                                onPageClick={handlerPageClick} 
                                totalPages={Math.ceil(totalResults / pageSize )} 
                            />
                        </div>
                </div>
                
            </div> */}
            
            
        </div>
        
    );

};