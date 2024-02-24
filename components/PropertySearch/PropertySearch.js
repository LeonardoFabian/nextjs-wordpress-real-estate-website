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
        const {page, minPrice, maxPrice, petFriendly, hasParking} = queryString.parse(window.location.search);

        const filters = {};

        if(minPrice) {
            filters.minPrice = parseInt(minPrice);
        }

        if(maxPrice) {
            filters.maxPrice = parseInt(maxPrice);
        }

        if(hasParking === "true") {
            filters.hasParking = true;
        }

        if(petFriendly === "true") {
            filters.petFriendly = true;
        }

        const response = await fetch(`/api/search`, {
            method: "POST",
            body: JSON.stringify({
                page: parseInt(page || "1"),
                ...filters,
            }),
        });
        const data = await response.json();
        console.log("PROPERTY SEARCH DATA: ", data);

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
        petFriendly, 
        hasParking, 
        minPrice, 
        maxPrice,
    }) => {
        // update our browser url
        // search
        console.log("ROUTER: ", router);
        console.log("FILTERS: ", petFriendly, hasParking, minPrice, maxPrice);

        if(router.query.slug) {
            await router.push(
                `${router.query.slug.join("/")}?page=1&petFriendly=${!!petFriendly}&hasParking=${!!hasParking}&minPrice=${minPrice}&maxPrice=${maxPrice}`, 
                null, 
                {
                    shallow: true,
                }
            );
        } else {
            await router.push(
                `/buying/properties?page=1&petFriendly=${!!petFriendly}&hasParking=${!!hasParking}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
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