import { useEffect, useState } from "react"
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from 'query-string';
import { Filters } from "./Filters";

export const PropertySearch = () => {

    const [properties, setProperties] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const pageSize = 3;
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
        console.log("SEARCH DATA: ", data);

        setProperties(data.properties);
        setTotalResults(data.total);
    };

    const handlerPageClick = async (pageNumber) => {
        const {
            petFriendly, 
            hasParking,
            minPrice,
            maxPrice
        } = queryString.parse(window.location.search);

        await router.push(`${router.query.slug.join("/")}?page=${pageNumber}&petFriendly=${petFriendly === "true"}&hasParking=${hasParking === "true"}&minPrice=${minPrice}&maxPrice=${maxPrice}`, null, {
            shallow: true,
        });
        search();
    };

    useEffect(() => {        
        search();
    }, []);

    const handleSearch = async ({petFriendly, hasParking, minPrice, maxPrice}) => {
        // update our browser url
        // search
        console.log("FILTERS: ", petFriendly, hasParking, minPrice, maxPrice);
        await router.push(`${router.query.slug.join("/")}?page=1&petFriendly=${!!petFriendly}&hasParking=${!!hasParking}&minPrice=${minPrice}&maxPrice=${maxPrice}`, null, {
            shallow: true,
        });
        search();
    }

    return (
        <div className="px-4 py-5 max-w-5xl mx-auto text-gray-800 absolute left-0 right-0 -mt-24">
            <Filters onSearch={handleSearch} />
            <Results properties={properties} />
            <Pagination onPageClick={handlerPageClick} totalPages={Math.ceil(totalResults / pageSize )} />
        </div>
    );

};