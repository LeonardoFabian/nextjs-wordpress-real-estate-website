import { v4 as uuid } from "uuid";

export const mapState = (states) => {
    return (states || []).map(state => ({
        id: uuid(),
        databaseId: state?.node?.databaseId || null,
        name: state?.node?.name || "",
        slug: state?.node?.slug || "",
        uri: state?.node?.uri || null
    }));
};