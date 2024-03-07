import { v4 as uuid } from "uuid";

export const mapCountries = (countries) => {
    return (countries || []).map(country => ({
        id: uuid(),
        databaseId: country?.node?.databaseId || null,
        name: country?.node?.name || "",
        slug: country?.node?.slug || "",
        uri: country?.node?.uri || null
    }));
};