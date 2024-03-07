import { v4 as uuid } from "uuid";

export const mapCities = (cities) => {
    return (cities || []).map(city => ({
        id: uuid(),
        databaseId: city?.node?.databaseId || 0,
        name: city?.node?.name || "",
        slug: city?.node?.slug || "",
        uri: city?.node?.uri || ""
    }));
}