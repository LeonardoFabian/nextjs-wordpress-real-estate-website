import { v4 as uuid } from "uuid";

export const mapCategories = (categories) => {
    return (categories || []).map(category => ({
        id: uuid(),
        databaseId: category.node.databaseId || null,
        name: category.node.name || "",
        slug: category.node.slug || "",
        uri: category.node.uri || null
    }));
};