import { v4 as uuid } from "uuid"

export const mapFeatures = (features) => {
    return (features || []).map(feature => ({
        id: uuid(),
        databaseId: feature?.node?.databaseId || 0,
        name: feature?.node?.name || "",
        slug: feature?.node?.slug || "",
        uri: feature?.node?.uri || ""
    }));
};