import client from 'client';
import { gql } from "@apollo/client";

const handler = async (req, res) => {
    try {
        const filters = JSON.parse(req.body);

        console.log("REQ BODY: ", filters);

        let hasParkingFilter = ``;
        let petFriendlyFilter = ``;
        let minPriceFilter = ``;
        let maxPriceFilter = ``;
        let currencyFilter = ``;
        let parkingQtyFilter = ``;
        let bathroomsFilter = ``;
        let bedroomsFilter = ``;
        let codeFilter = ``;
        let floorFilter = ``;
        let listingTypeFilter = ``;
        let slug = ``;
        // let categorySlugFilter = ``;

        // if(filters.categoryId) {
        //     categoryIdFilter = `${filters.categoryId}`;
        // }

        if(filters.categorySlug) {
            slug = filters.categorySlug;
        }

        if(filters.listingType) {
            listingTypeFilter = `
                {
                    key: "listing_type"
                    compare: EQUAL_TO
                    value: "${filters.listingType}"
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

        if(filters.currency) {
            currencyFilter = `
                {
                    key: "currency"
                    compare: EQUAL_TO
                    value: "${filters.currency}"
                },
            `;
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
                query AllPropertiesQuery {
                    properties(where: {
                            offsetPagination: {
                                size: 12, 
                                offset: ${
                                    ((filters.page || 1) - 1) * 12
                                }
                            }
                            metaQuery: {
                                relation: AND
                                metaArray: [
                                    ${petFriendlyFilter}
                                    ${hasParkingFilter}
                                    ${minPriceFilter}
                                    ${maxPriceFilter}
                                    ${currencyFilter}
                                    ${parkingQtyFilter}
                                    ${bathroomsFilter}
                                    ${bedroomsFilter}
                                    ${codeFilter}
                                    ${floorFilter}
                                    ${listingTypeFilter}
                                ]
                            },
                            # categoryId: 5
                        }
                    ) {
                        pageInfo {
                            offsetPagination {
                                total
                            }
                        }
                        nodes {
                            databaseId
                            title
                            uri
                            date 
                            dateGmt
                            featuredImage {
                                node {
                                    uri
                                    sourceUrl
                                }
                            }
                            propertyFeatures {
                                bedrooms
                                bathrooms
                                hasParking
                                parkingQty
                                currency
                                code
                                floor
                                listingType
                                squareFeet
                                price
                                condition
                                status
                                petFriendly
                                deliveryDate
                                yearBuilt
                            }  
                            features {
                                nodes {
                                    databaseId
                                    name
                                }
                            }   
                            locations {
                                nodes {
                                    databaseId
                                    name
                                }
                            } 
                            cities {
                                nodes {
                                    databaseId
                                    name
                                }
                            }
                            states {
                                nodes {
                                    databaseId
                                    name
                                }
                            }
                            countries {
                                nodes {
                                    databaseId
                                    name
                                }
                            }
                            categories(where: {slug: "${slug}"}) {
                                nodes {
                                    databaseId
                                    name
                                    slug
                                }
                            }
                        }
                    }
                    categories {
                        nodes {
                            databaseId
                            name
                            slug
                        }
                    }
                }
            `,
        });

        console.log("PROPERTIES API DATA: ", data?.properties?.nodes);

        return res.status(200).json({
            total: data?.properties?.pageInfo?.offsetPagination?.total,
            properties: data?.properties?.nodes || [],
            categories: data?.categories?.nodes || [],
        });

    } catch(e) {
        console.log("ERROR: ", e);
    }
};

export default handler;