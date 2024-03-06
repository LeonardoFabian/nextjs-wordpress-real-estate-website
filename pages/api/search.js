import client from 'client';
import { gql } from "@apollo/client";

const handler = async (req, res) => {

    try {
        const filters = JSON.parse(req.body);

        console.log("---------------------------SERVER SIDE SEARCH REQ BODY: ", filters);

        let codeFilter = ``;
        let listingTypeFilter = ``;
        let bedroomsFilter = ``;
        let bathroomsFilter = ``;
        let hasParkingFilter = ``;
        let parkingQtyFilter = ``;
        let minSquareFeetFilter = ``;
        let maxSquareFeetFilter = ``;
        let petFriendlyFilter = ``;
        let statusFilter = ``;
        let currencyFilter = ``;
        let minPriceFilter = ``;
        let maxPriceFilter = ``;
        let floorFilter = ``;
        let minDeliveryDateFilter = ``;
        let maxDeliveryDateFilter = ``;
        let conditionFilter = ``;
        let minYearBuiltFilter = ``;
        let maxYearBuiltFilter = ``;
        let zipCodeFilter = ``;
        let categoryIdFilter = filters.categoryId ? `categoryId: ${parseInt(filters.categoryId)}` : '';

        // if(filters.categoryId) {
        //     categoryIdFilter = `categoryId: ${parseInt(filters.categoryId)}`;
        // } 

        if(filters.zipCode) {
            zipCodeFilter = `
                {
                    key: "zip_code"
                    compare: EQUAL_TO
                    value: "${filters.zipCode}"
                }
            `;
        }

        if(filters.status) {
            statusFilter = `
                {
                    key: "status" 
                    compare: EQUAL_TO
                    value: "${filters.status}"
                }
            `;
        }

        if(filters.listingType) {
            listingTypeFilter = `
                {
                    key: "listing_type"
                    compare: EQUAL_TO
                    value: "${filters.listingType}"
                    type: NUMERIC
                },
            `;
        }

        if(filters.floor) {
            floorFilter = `
                {
                    key: "floor" 
                    compare: EQUAL_TO
                    value: "${filters.floor}"
                    type: NUMERIC
                },
            `;
        }

        if(filters.condition) {
            conditionFilter = `
                {
                    key: "condition"
                    compare: EQUAL_TO
                    value: "${filters.condition}"
                }
            `;
        }

        if(filters.code) {
            codeFilter = `
                {
                    key: "code"
                    compare: EQUAL_TO
                    value: "${filters.code}"
                },
            `;
        }

        if(filters.bedrooms) {
            bedroomsFilter = `
                {
                    key: "bedrooms"
                    compare: EQUAL_TO
                    value: "${filters.bedrooms}"
                    type: NUMERIC
                },
            `;
        }

        if(filters.bathrooms) {
            bathroomsFilter = `
                {
                    key: "bathrooms"
                    compare: EQUAL_TO
                    value: "${filters.bathrooms}"
                    type: NUMERIC
                },
            `;
        }

        if(filters.parkingQty) {
            parkingQtyFilter = `
                {
                    key: "parking_qty"
                    compare: EQUAL_TO
                    value: "${filters.parkingQty}"
                    type: NUMERIC
                },
            `;
        }

        if(filters.currency && filters.currency != 0) {
            currencyFilter = `
                {
                    key: "currency"
                    compare: EQUAL_TO
                    value: "${filters.currency}"
                },
            `;
        } else {
            currencyFilter = ``;
        }

        if(filters.hasParking) {
            hasParkingFilter = `
            {
                key: "has_parking"
                compare: EQUAL_TO
                value: "1"
            },
            `;
        }

        if(filters.petFriendly) {
            petFriendlyFilter = `
            {
                key: "pet_friendly"
                compare: EQUAL_TO
                value: "1"
            },
            `;
        }

        if(filters.minPrice) {
            minPriceFilter = `
            {
                key: "price"
                compare: GREATER_THAN_OR_EQUAL_TO
                value: "${filters.minPrice}"
                type: NUMERIC
            },
            `;
        }

        if(filters.maxPrice) {
            maxPriceFilter = `
            {
                key: "price"
                compare: LESS_THAN_OR_EQUAL_TO
                value: "${filters.maxPrice}"
                type: NUMERIC
            },
            `;
        }

        const {data} = await client.query({
            query: gql`
                query SearchQuery {
                    properties(
                    where: {
                        offsetPagination: {size: 12, offset: ${((filters.page || 1) - 1) * 12}}, 
                        metaQuery: {
                            relation: AND, 
                            metaArray: [
                                ${hasParkingFilter}
                                ${petFriendlyFilter}
                                ${statusFilter}
                                ${minPriceFilter}
                                ${maxPriceFilter}
                                ${currencyFilter}
                                ${parkingQtyFilter}
                                ${bathroomsFilter}
                                ${bedroomsFilter}
                                ${codeFilter}
                                ${floorFilter}
                                ${listingTypeFilter}
                                ${conditionFilter}
                                ${zipCodeFilter}
                            ]
                        } 
                        ${categoryIdFilter}
                    }
                ) {
                    edges {
                    node {
                        databaseId
                        title(format: RENDERED)
                        uri
                        slug
                        date
                        categories {
                        edges {
                            node {
                            databaseId
                            name
                            slug
                            uri
                            }
                        }
                        }
                        featuredImage {
                            node {
                                sourceUrl(size: LARGE)
                            }
                        }
                        propertyFeatures {
                            code                            
                            listingType
                            bedrooms
                            bathrooms
                            hasParking
                            parkingQty
                            squareFeet
                            petFriendly
                            status
                            currency
                            price
                            floor
                            deliveryDate
                            condition
                            yearBuilt
                            zipCode
                        }
                        features {
                        edges {
                            node {
                            name
                            }
                        }
                        }
                        locations {
                        edges {
                            node {
                            name
                            }
                        }
                        }
                        cities {
                        edges {
                            node {
                            name
                            }
                        }
                        }
                        states {
                        edges {
                            node {
                            name
                            }
                        }
                        }
                        countries {
                        edges {
                            node {
                            name
                            }
                        }
                        }
                    }
                    }
                    pageInfo {
                        offsetPagination {
                            total
                        }
                    }
                }
                    categories {
                        edges {
                            node {
                                name
                                databaseId
                                slug
                                uri
                            }
                        }
                    }
                }
            `,
        });

        console.log("---------------------------SERVER SIDE PROPERTIES DATA: ", data);
        console.log("---------------------------SERVER SIDE CATEGORIES DATA: ", data.categories?.edges);

        return res.status(200).json({
            total: data?.properties?.pageInfo?.offsetPagination?.total,
            properties: data?.properties?.edges || [],
            categories: data?.categories?.edges || [],
        });

    } catch(e) {
        console.log("ERROR: ", e);
    }
};

export default handler;