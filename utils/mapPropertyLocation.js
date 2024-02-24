import { v4 as uuid } from "uuid";

export const mapPropertyLocation = (locations) => {
    return (locations || []).map(location => ({
        id: uuid(),
        databaseId: location.node.databaseId || null,
        name: location.node.name || "",
        slug: location.node.slug || "",
        uri: location.node.uri || null
    }));
};